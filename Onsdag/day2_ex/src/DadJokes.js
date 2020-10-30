import React, { useEffect, useState } from "react";

const url = "https://icanhazdadjoke.com";

function DadJoke() {
  const [joke, setJoke] = useState("No joke yet!");

  useEffect(() => {
    const interval = setInterval(getJoke, 10000);
    return () => {
      clearInterval(interval);
      alert("Så er det slut");
    };
  }, []);

  return (
    <div>
      <h1>Dad Jokes:</h1>
      <h3>{joke}</h3>
    </div>
  );

  function getJoke() {
    fetch(url, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
      });
  }
}

export default DadJoke;
