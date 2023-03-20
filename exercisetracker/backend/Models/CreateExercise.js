import mongoose from "mongoose";

//structure of table
const CreateExerciseStructure = mongoose.Schema({
    UserName:String,
    Description:String,
    Duration:Number
});
//table in which above structure is kept
const CreateExerciseModel = mongoose.model("CreateExercise",CreateExerciseStructure);

export default CreateExerciseModel;

