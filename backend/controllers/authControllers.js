const loginPOST = (req, res) => {
  console.log(req.body);
  res.json({
    authenticated: true,
  });
};

const signupPOST = (req, res) => {
  console.log(req.body);
  res.json({
    authenticated: false,
  });
};

const testGET = (req, res) => {
  res.send("TEST SUCCESSFUL");
};

module.exports = {
  loginPOST,
  signupPOST,
  testGET,
};
