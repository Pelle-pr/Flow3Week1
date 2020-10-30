import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import { person, males, females } from "./file2";
import { Welcome, MultiWelcome } from "./file3";

const { firstName, email, lastName } = person;
console.log(firstName + email);

const malesAndFemalesArray = [...males, ...females];
console.log(malesAndFemalesArray);

const malesAndFemalesArrayV2 = [...males, firstName, "Hanne", ...females];
console.log(malesAndFemalesArrayV2);

let personV2 = {
  email: email,
  firstName: firstName,
  friends: [...malesAndFemalesArray],
  gender: "Male",
  lastName: lastName,
  phone: 123456,
};

console.log(personV2);

function App() {
  return (
    <div className="App">
      <h2>EX1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppercase me")}</p>
      <h2>EX2</h2>
      <p>
        First name: {firstName} Email: {email}
      </p>
      <h2>EX3</h2>
      <MultiWelcome />
    </div>
  );
}

export default App;
