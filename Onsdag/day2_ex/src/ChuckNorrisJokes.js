import React, { useState } from "react";

const url = "https://api.chucknorris.io/jokes/random";

function Joke() {
  const [joke, setJoke] = useState("");
  

  return (
    <div>
      <button onClick={getJoke}>Get Chuck Norris Joke</button>
      <h1>Chuck Norris Jokes:</h1>
      <h3>{joke}</h3>
    </div>
  );

  function getJoke() {
    fetch(url, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);
      });
  }
}

export default Joke;
