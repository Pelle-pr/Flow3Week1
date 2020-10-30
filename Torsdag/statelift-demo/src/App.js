import "./App.css";
import React, { useState } from "react";
import PersonList from "./PersonList";
import NewPerson from "./addPerson";
function App() {
  const initNames = [{ name: "Benny" }, { name: "Johnny" }, { name: "Hans" }];

  const [names, setNames] = useState(initNames);
  const [newName, setNewName] = useState({ name: "" });

  const addPerson = (person) => {
    names.push(person);
    setNewName({ name: person.name });
    setNewName({ name: "" });
  };
  return (
    <div className="App">
      <h1>State-Lift Demo</h1>
      <React.Fragment>
        <PersonList persons={names} />
      </React.Fragment>
      <React.Fragment>
        <NewPerson newPerson={newName} addPerson={addPerson} />
      </React.Fragment>
    </div>
  );
}

export default App;
