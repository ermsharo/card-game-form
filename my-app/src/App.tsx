import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/DashBoard";

console.log("Testando a nossa publicação");

// O que precisa ser feito

let localStorageFake = [];

const editCard = () => {};
const addCard = () => {};

const removeCard = () => {};

const createCard = (
  id: number,
  name: string,
  description: string,
  atack: string,
  defense: number,
  cardType: string,
  cardClass: string
) => {};

console.log("fix");

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
