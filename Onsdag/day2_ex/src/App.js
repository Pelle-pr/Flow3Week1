import React from "react";
import "./App.css";
import Count from "./Count";
import Joke from "./ChuckNorrisJokes";
import DadJoke from "./DadJokes";
import MemberDemo from "./ListDemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <Count
            initialCount={parseInt(localStorage.getItem("count")) || 0}
            inc={1}
          />
        </span>
        <span>
          <Joke />
        </span>
        <span>
          <DadJoke />
        </span>
        <span>
          <MemberDemo />
        </span>
      </header>
    </div>
  );
}

export default App;
