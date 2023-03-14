import './App.css';
import CreateExercises from './Components/CreateExercises';
import CreateUser from './Components/CreateUser';
import Exercises from './Components/Exercises';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    
    <Route path='/Exercises' element = {<Exercises/>}></Route>

    <Route path='/CreateExercises' element = {<CreateExercises/>}></Route>
    
    <Route path='/CreateUser' element = {<CreateUser/>}></Route>
    
    </Routes>
    </>
  );
}

export default App;
