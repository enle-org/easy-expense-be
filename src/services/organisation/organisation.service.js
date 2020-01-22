// Initializes the `organisation` service on path `/organisation`
const { Organisation } = require('./organisation.class');
const createModel = require('../../models/organisation.model');
const hooks = require('./organisation.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/organisation', new Organisation(options, app));

  app.use('/invites', {
    async create(data) {

      await createModel(app).findOneAndUpdate({ name: data.org }, {invites: data.emails});
    
      const transporter = nodemailer.createTransport({
        host: app.get('smtp_host'),
        port: app.get('smtp_port'),
        auth: {
          user: app.get('smtp_username'),
          pass: app.get('smtp_password'),
        },
        pool: true,
        rateLimit: true,
        maxConnections: 1,
        maxMessages: 3,
      });

      const body = {
        receivers: data.emails,
        subject: 'You have been added to an organization by ',
        text: '',
        html: 'Please click <a href="${process.env.LOCAL_URL}/org/invite/${data.org}">here</a> to join the organization',
      };

      const mailer = async body => {
        const { receivers, subject, text, html } = body;
      
        try {
          return await transporter.sendMail({
            from: app.get('email'),
            to: receivers,
            subject,
            text,
            html,
          });
        } catch (err) {
          throw err;
        }
      };
      return await mailer(body);
    }
  });
  app.use('/org/invite', {
    async get(params) {
      const org = createModel(app).find({ name: params}, function (err, result) {
        console.log(result[0]._id);
      });
      // call the User service that creates an user and pass the correct values to it
      return org;
    }
  });

  // Get our initialized service so that we can register hooks
  const service = app.service('organisation');

  service.hooks(hooks);
};
