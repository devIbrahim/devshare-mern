const userdataGET = (req, res) => {
  res.json({
    authed: true,
    USER_DATA: {
      name: "Syed Anees Ibrahim",
      email: "syedaneesibrahom@gmail.com",
      id: "s0Gos09tw34twKHEGUw3t9w3twt39tw3tjw3g9wt",
    },
  });
};

module.exports = {
  userdataGET,
};
