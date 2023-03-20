import "./App.css";
import CreateExercises from "./Components/CreateExercises";
import CreateUser from "./Components/CreateUser";
import Exercises from "./Components/Exercises";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Edit from "./Components/Edit";

function App() {
  return (
    <div class='container'>
      <Navbar />
      
      <Routes>
        <Route path="/Exercises" element={<Exercises />}></Route>
        <Route exact path="/CreateExercises" element={<CreateExercises />}></Route>
        <Route path="/CreateUser" element={<CreateUser />}></Route>
        <Route path="/Edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
