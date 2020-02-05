const settingsHandler = async (models, user) => {
  const orgs = await models.organisations.find({ createdBy: user._id });
  // const orgMembers = models.organisations.find({ createdBy: user._id});

  return {
    orgSettings: orgs.map(org => ({
      name: org.name,
      invites: org.invites,
      members: [],
    })),
    personalSettings: {
      fullname: user.fullname,
    },
  };
};

module.exports = settingsHandler;
