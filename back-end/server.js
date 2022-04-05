const express = require("express");
const bodyParser = require("body-parser");
const dbURL =
  "mongodb+srv://cs260:cs260@cluster0.zu1gm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");

// connect to the database
mongoose.connect(dbURL, {
  useNewUrlParser: true,
});

const multer = require("multer");
const upload = multer({
  dest: "../front-end/public/images/",
  limits: {
    fileSize: 10000000,
  },
});

// todo: create the same thing but for a user instead

const houseSchema = new mongoose.Schema({
  title: String,
  address: String,
  description: String,
  path: String,
});
const commentSchema = new mongoose.Schema({
//   commentTime: String,
  author: String,
  origin: String,
  text: String,
  email: String,
});

// Create a model for Houses
const House = mongoose.model("House", houseSchema);

// Create a model for Comments
const Comment = mongoose.model("Comment", commentSchema);

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.post("/api/photos", upload.single("photo"), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename,
  });
});

app.post("/api/houses", async (req, res) => {
  const house = new House({
    title: req.body.title,
    address: req.body.address,
    description: req.body.description,
    notes: req.body.notes,
    path: req.body.path,
  });
  console.log(house);
  try {
    await house.save();
    res.send(house);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/api/comments", async (req, res) => {
  const comment = new Comment({
    author: req.body.author,
    origin: req.body.origin,
    text: req.body.text,
    email: req.body.email,
  });
  try {
    await comment.save();
    res.send(comment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/houses/:id", async (req, res) => {
  try {
    await House.deleteOne({
      _id: req.params.id,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
app.delete("/api/comments/:id", async (req, res) => {
  try {
    await Comment.deleteOne({
      _id: req.params.id,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/houses/:id", async (req, res) => {
  console.log(req.params.id);
  let house = await House.findOne({
    _id: req.params.id,
  });
  console.log(house);
  try {
    house.title = req.body.title;
    house.address = req.body.address;
    house.description = req.body.description;
    house.save();
    console.log(house);
    res.send(house);
    // res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/comments/:id", async (req, res) => {
  console.log(req.params.id);
  let comment = await Comment.findOne({
    _id: req.params.id,
  });
  console.log(comment);
  try {
    comment.author = req.body.author;
    comment.origin = req.body.origin;
    comment.text = req.body.text;
    comment.email = req.body.email;
    comment.save();
    res.send(comment);
    // res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/houses", async (req, res) => {
  try {
    let houses = await House.find();
    console.log(houses);
    res.send(houses);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/comments", async (req, res) => {
	try {
	  let comments = await Comment.find();
	  console.log("this is the comment from backend" + comments);
	  res.send(comments);
	} catch (error) {
	  console.log(error);
	  res.sendStatus(500);
	}
  });

app.listen(3000, () => console.log("Server listening on port 3000!"));
