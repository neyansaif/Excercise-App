const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "jggggggggjgjhhdhksdhahsdkjgasg";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Connecting Database
mongoose.connect("mongodb://127.0.0.1:27017/ExerciseApp");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database is connected");
});
//Connecting Database

//Schemaaa for login and register
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);

//Schemaaa for user data
const userDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  activity: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: String, required: true },

  User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// Define a Mongoose model for the user data
const UserData = mongoose.model("UserData", userDataSchema);

// Handle form data submission
app.post("/form", async (req, res) => {
  try {
    const { name, description, activity, duration, date } = req.body;
    const user = req.User; // The authenticated user object, containing the user ID

    // Create a new form data object
    const formData = new UserData({
      name,
      description,
      activity,
      duration,
      date,
      user,
    });
    // Save the form data to the database
    const data = await formData.save();

    res.json({ status: "ok", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//Api to get User data
app.get("/userData", async (req, res) => {
  try {
    const userData = await UserData.find({});
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Delete userdata
app.delete("/:id", async (req, res) => {
  try {
    await UserData.deleteOne({ _id: req.params.id });
    res.status(200).json({ status: "ok" });
  } catch (error) {
    res.status(409).json({ status: error.message });
  }
});

//Handling Resgister API
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Already Exists" });
    }
    await User.create({
      name: name,
      email: email,
      password: encryptedPassword,
    });
    return res.send({ status: "ok" });
  } catch (error) {
    return res.send({ status: "error" });
  }
});

//LOGIN API
//npm i jsonwebtoken
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

//Api to get User details
app.post("/userDetails", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    console.log(error);
  }
});

//Check server connection
app.listen(2000, () => {
  console.log("Server runing on port 2000");
});
//Check server connection
