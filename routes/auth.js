const express = require("express");
const jwt = require("jsonwebtoken");
// const app = express();
// app.use(express.json()); // to support JSON-encoded bodies
// app.use(express.urlencoded());
var router = express.Router();
const accessTokenSecret = "secretkey";
const users = [
  {
    username: "santosh",
    password: "santosh123",
    role: "admin",
  },
  {
    username: "koushik",
    password: "koushik123",
    role: "member",
  },
];

//http://localhost:5000/login
router.post("/login", (req, res) => {
    console.log("Post called");
  // Read username and password from request body
  const { username, password } = req.body;

  // Filter user from the users array by username and password
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    // Generate an access token
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      accessTokenSecret
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Username or password incorrect");
  }
});

module.exports = router;