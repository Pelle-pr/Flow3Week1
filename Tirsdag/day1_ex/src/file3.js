import React from "react";
import { person, persons } from "./file2";
import PropTypes from "prop-types";

function Welcome(props) {
  const { name } = props;
  return <h1>Hello, {name}</h1>;
}

function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
      {persons.map((p) => (
        <WelcomePerson key={p.firstName} person={p} />
      ))}
    </div>
  );
}

function WelcomePerson(props) {
  const { firstName, lastName, email } = props.person;
  return (
    <h1>
      Hallo, {firstName} {lastName} {email}
    </h1>
  );
}

WelcomePerson.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export { Welcome, MultiWelcome };
