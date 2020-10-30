import React, { useState, useEffect } from "react";

function NewPerson(props) {
  const [person, setPerson] = useState(props.newPerson);

  const savePerson = (event) => {
    if (person.name === "") {
      event.preventDefault();
      return alert("Tomt navn kan ikke lade sig gøre");
    }
    props.addPerson(person);
    event.preventDefault();
  };
  useEffect(() => setPerson({ ...props.newPerson }), [props.newPerson]);

  const onChange = (event) => {
    const value = event.target.value;
    person.name = value;
    setPerson({ ...person });
  };
  return (
    <form>
      <input value={person.name} onChange={onChange}></input>
      <React.Fragment>{person.name}</React.Fragment>
      <button type="submit" onClick={savePerson}>
        Add
      </button>
    </form>
  );
}

export default NewPerson;
