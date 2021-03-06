import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ExercisesList from "./Components/ExercisesList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/" exact component={ExercisesList} />
      </div>
    </Router>
  );
}

export default App;
