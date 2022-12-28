import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CardList from "./CardsList";
import NewCard from "./NewCard";

const removeItem = () => {};

let generatedInfo = () => {};

const getIdList = () => {
  let idList = localStorage.getItem("idList");
  if (idList === null) {
    return [];
  }
  return JSON.parse(idList);
};

const getCardById = (id: number) => {
  return localStorage.getItem(`${id}`);
};

const getLastId = () => {
  let referenceIdList = getIdList();
  if (referenceIdList == null) {
    return 0;
  }
  let reference = getIdList();
  if (reference.length == 0) return 0;
  reference.sort();
  return parseInt(reference.slice(-1));
};

const addId = () => {
  let nextId = getLastId() + 1;
  console.log("next id", nextId);
  let idList: string[] = getIdList();
  let reference: string[] = [];
  reference.push(nextId.toString());
  console.log("reference", reference);
  localStorage.setItem("idList", JSON.stringify(reference.concat(idList)));
};

const createCardObj = (
  id: number,
  name: string,
  description: string,
  atack: number,
  defense: number,
  cardType: string,
  cardClass: string
) => {
  return {
    id: id,
    name: name,
    description: description,
    atack: atack,
    defense: defense,
    cardType: cardType,
    cardClass: cardClass,
  };
};

const createCard = (
  name: string,
  description: string,
  atack: number,
  defense: number,
  cardType: string,
  cardClass: string
) => {
  let nextId = getLastId() + 1;
  addId();
  localStorage.setItem(
    nextId.toString(),
    JSON.stringify(
      createCardObj(
        nextId,
        name,
        description,
        atack,
        defense,
        cardType,
        cardClass
      )
    )
  );
};

const LoginBox = styled.div`
  padding-top: 32px;
  grid-column: 3/7;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90vw;
  margin: auto;
  grid-column-gap: 32px;

  @media (min-width: 1300px) {
    width: 80vw;
  }
`;

const cardTypes = [
  {
    value: "Magia",
    label: "Magia",
  },
  {
    value: "Criatura",
    label: "Criatura",
  },
];

const cardClasses = [
  {
    value: "Mago",
    label: "Mago",
  },
  {
    value: "Paladino",
    label: "Paladino",
  },
  {
    value: "Caçador",
    label: "Caçador",
  },
  {
    value: "Druida",
    label: "Druida",
  },
  {
    value: "Qualquer",
    label: "Qualquer",
  },
];

function Dashboard() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    description: "",
    atack: 0,
    defense: 0,
    cardType: "",
    cardClass: "",
  });

  function handleChange(evt: any) {
    const value = evt.target.value;
    setFormInputs({
      ...formInputs,
      [evt.target.name]: value,
    });
  }

  return (
    <>
      {" "}
      <CardList /> <NewCard />
    </>
  );
}

export default Dashboard;
