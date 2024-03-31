const express = require("express");
const UserDetails = require("./UserDetails");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const saltRounds = 10;

app.post("/signup", async (req, res) => {
  console.log("Signup request received");
  const { email, mobile, password } = req.body;
  try {
    const check = await UserDetails.findOne({ email: email });

    if (check) {
      console.log("Checking if user exists");
      res.json("exist");
    } else {
      console.log("User Registered Successfully");
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const data = {
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
app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
