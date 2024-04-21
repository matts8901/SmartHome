const express = require("express");
const UserDetails = require("./UserDetails");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const saltRounds = 10;
const jwtsecretkey = "12345fgt"
app.post("/signup", async (req, res) => {
  console.log("Signup request received");
  const { username,email, mobile, password } = req.body;
  try {
    const check = await UserDetails.findOne({ email: email });

    if (check) {
      console.log("Checking if user exists");
      res.json("exist");
    } else {
      console.log("User Registered Successfully");
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const data = {
        username: username,
        email: email,
        mobile: mobile,
        password: hashedPassword,
      };
      await UserDetails.create(data);
      const user = await UserDetails.findOne({ email: email });
      res.json({ status: "notexist", data: user });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// app.get("/username", cors(), async (req, res) => {   
//   const authHeader = req.headers["authorization"];   
// const token = authHeader && authHeader.split(" ")[1];   
// if (token == null) return res.sendStatus(401);   
// jwt.verify(     token,     jwtsecretkey, // Use the manually defined secret keyasync 
// async (err, user) => {       
//   if (err) return res.sendStatus(403);       
//   const userData = await UserDetails.findOne({ _id: user.userId });    
//   res.json({         
//   username: userData.username,});});});

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
app.post("/login", async (req, res) => {
  console.log("Login request received");
  const { email, password } = req.body;
  try {
    // Check if the user with the provided email exists in the database
    const user = await UserDetails.findOne({ email: email });
   
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ status: "notexist", message: "User not found" });
    }
 
    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
   
    if (!passwordMatch) {
      console.log("Incorrect password");
      return res.status(401).json({ status: "incorrectPassword", message: "Incorrect password" });
    }
    const token = jwt.sign({ userId: user._id }, jwtsecretkey, { expiresIn: '1h' }); // Use the manually defined secret key    res.json({ status: "exist", user: user, token: token });
    console.log("User logged in successfully");
    // If the email and password match, respond with success and user data
    res.json({ status: "exist", user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});
 
