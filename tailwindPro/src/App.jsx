import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  // use the props and pass the boject in the card
  /*
  let myObj = {
    username: "Hello",
    age: 21,
  };*/

  return (
    <>
      <h1 className="bg ">Cards</h1>
      <Card userName="DP" />
      <Card userName="PK" />
      <Card userName="Pooja" />
    </>
  );
}

export default App;
