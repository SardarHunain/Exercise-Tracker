import axios from "axios";
const url = "http://localhost:5000";

export const addData = async(exerciseData) => {
  return await axios.post(`${url}/CreateExercises`,exerciseData);//requires two arguements
};

//the above post request will travel to index.js in backend directory

export const getData = async() => {
  return await axios.get(`${url}/Exercises`);//requires two arguements
};
