const express = require("express");
const mongoose = require("mongoose");
const path = require("path");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//const databaseUrl = "workouttracker";
//const collections = ["notes"];

mongoose.connect("mongodb://localhost/exercises", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/exercise?/:id", (req, res) => {
  console.log(res);

  db.exercises.find(id).then(exercises => {
res.json(exercises);
});
});

// const workoutsSchema = new Schema(
//     {
//       day: {
//         type: Date,
//         default: () => new Date()
//       },
//       exercises: [
//         {
//           type: {
//             type: String,
//             trim: true,
//             required: "Enter an exercise type"
//           },
//           name: {
//             type: String,
//             trim: true,
//             required: "Enter an exercise name"
//           }
//         }
//         ]
//     }
//   );
//   const Workout = mongoose.model("Workout", workoutSchema);

//   module.exports = Workout;
const workout = require("Models/workout.js");
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
