const userdataGET = (req, res) => {
  res.json({
    authed: true,
    USER_DATA: {
      fullname: res.locals.dToken.fullname,
      username: res.locals.dToken.username,
      id: res.locals.dToken.id,
    },
  });
};

module.exports = {
  userdataGET,
};
