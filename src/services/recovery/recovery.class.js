/* eslint-disable no-unused-vars */
const crypto = require('crypto');
const { NotFound, GeneralError } = require('@feathersjs/errors');

exports.Recovery = class Recovery {
  constructor (options) {
    this.options = options || {};
  }

  recoveryMsg(email, token) {
    return {
      to: email,
      from: 'no_reply@easy-expense.com',
      subject: 'Easy Expense Password Recovery',
      text: `To reset your password, please click this link http://localhost:3030/recovery/${token}`,
      html: `<strong>To reset your password, please click this link http://localhost:3030/recovery/${token}</strong>`,
    };
  }

  async validateUserAndToken(id) {
    const user = await this.options.models.users.findOne({
      'passwordRecovery.token': id,
    });
    if (user) {
      const tokenExpiry = Date.parse(user.passwordRecovery.expiry);
      if (tokenExpiry >= Date.now()) {
        return {
          sucess: true,
          data: {
            message: 'Token is valid'
          }
        };
      }
      throw new GeneralError('Token has expired');
    }
    
    throw new NotFound('User does not exist');
  }

  async get (id, _params) {
    return await this.validateUserAndToken(id);
  }

  async create (data, _params) {
    const user = await this.options.models.users.findOne({ email: data.email });
    if (user) {
      const buffer = await new Promise((resolve, reject) => {
        crypto.randomBytes(20, (err, buffer) => {
          if (err) {
            reject('error generating token');
          }
          resolve(buffer);
        });
      });
      const token = buffer.toString('hex');
      await this.options.models.users.findByIdAndUpdate(
        { _id: user._id },
        {
          'passwordRecovery.token': token,
          'passwordRecovery.expiry': Date.now() + 3600000,
        },
        { upsert: true, new: true },
      );
      this.options.sendgridMail.send(this.recoveryMsg(user.email, token));
      return {
        sucess: true,
        data: {
          message: 'Recovery email has been sent, pleas check your indox.'
        }
      };
    }
    throw new NotFound('User does not exist');
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, _params) {
    if (!id || !data.password)
      throw new GeneralError('Id and password required.');

    const tokenValidityObj = await this.validateUserAndToken(id);
    if (tokenValidityObj.sucess) {
      const response = await this.options.models.users.findOneAndUpdate(
        { 
          'passwordRecovery.token': id,
        },
        {
          'password': data.password,
        },
        { upsert: true, new: true },
      );
      return response;
    }
  }

  async remove (id, params) {
    return { id };
  }
};
