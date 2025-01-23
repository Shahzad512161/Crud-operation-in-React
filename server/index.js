const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/CRUDReact", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// Get all users
app.get("/", (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// Create a new user
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

// Get a user by ID
app.get("/getUser/:id", (req, res) => {
  const { id } = req.params;
  UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

// Update a user by ID
app.put("/updateUser/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  UserModel.findByIdAndUpdate(id, { name, email, age }, { new: true })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.json(err));
});


app.delete("/deleteUser/:id", (req, res)=>{
    const { id } = req.params;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})
// Start the server
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
