const { GeneralError } = require('@feathersjs/errors');
const utils = require('./index');

const inviteMsg = (to, from, org, link) => {
  return {
    to,
    from: 'no_reply@easy-expense.com',
    subject: 'Easy Expense Invite',
    text: `You've been invited by ${from} to ${org} on Easy Exepense, to join, please click this link, ${link}`,
    html: `<strong>You've been invited by ${from} to ${org} on Easy Exepense, to join, please click this link, ${link}</strong>`,
  };
};

module.exports = async (
  newInvites,
  orgInvites = [],
  useremail,
  orgName,
  frontendURL,
  sendgridMail,
) => {
  const inviteEmails = [];
  const invitesMap = newInvites.map(async email => {
    const token = await utils.tokenGenerator();
    if (!orgInvites.includes(email)) {
      inviteEmails.push({ email, token });
    }
    else {
      throw new GeneralError('Invite already exists.');
    }
  });
  await Promise.all(invitesMap);
  const emailsSent = inviteEmails.map(emailObj => (
    sendgridMail.send(
      inviteMsg(
        emailObj.email,
        useremail,
        orgName.toUpperCase(),
        `${frontendURL}/invite/detials?email=${emailObj.email}&token=${emailObj.token}`
      )
    )
  ));
  await Promise.all(emailsSent);
  return inviteEmails;
};