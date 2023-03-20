//connection code
import  express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import  CreateExercise  from "./routes/CreateExercise.js";

const app = express();
const url = "mongodb+srv://hunain:123@cluster0.hi9rzw0.mongodb.net/ExerciseTracker?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log("connected successfully"));
app.listen(5000);

app.use(cors())
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/CreateExercises',CreateExercise);
app.use('/Exercises',CreateExercise);