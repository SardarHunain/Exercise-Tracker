import React from "react";
import { useState } from "react";
import { addData } from "../Service/api";

export default function CreateExercies() {
  
  const [exerciseData,setexerciseData] =useState({
    UserName: "",
    Description:"",
    Duration:""
  })

  const {UserName,Description,Duration} = exerciseData;
  
  const handleChange = (e) => {
    setexerciseData({...exerciseData,[e.target.name]:[e.target.value]})
  }

  const addDetails = async(e) => {
    e.preventDefault();
    //react and node connection through axios...................most important line
    await addData(exerciseData);
  }

  return (
    <>
      <h3 className="mt-5">Create new exercise log here</h3>
      <form>
        <div className="form-group">
          <label htmlfor="UserName">User Name:</label>
          <input type="text" class="form-control" name="UserName" id="UserName" onChange = {(e)=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlfor="Description">Description:</label>
          <input type="text" class="form-control" name="Description" id="Description" onChange = {(e)=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlfor="Duration">Duration (in minutes):</label>
          <input
            type="number"
            class="form-control"
            id="Duration"
            name="Duration"
            min="0"
            max="60"
            onChange = {(e)=>handleChange(e)}
          />
        </div>
        <br></br>
        <div className="my-10">
          <input type="submit" value="Submit" onClick={(e)=>addDetails(e)} className="btn btn-primary " />
        </div>
      </form>{" "}
    </>
  );
}
