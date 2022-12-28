import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { reference } from "@popperjs/core";
import CardList from "./CardsList";

const removeItem = () => {};

let generatedInfo = () => {};

const getIdList = () => {
  let idList = localStorage.getItem("idList");
  if (idList === null) {
    return [];
  }
  return JSON.parse(idList);
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
    <>      <CardList/> <Grid>


    <LoginBox>
      <TextField
        fullWidth
        id="outlined-name"
        label="Nome"
        name="name"
        value={formInputs.name}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Descrição"
        name="description"
        value={formInputs.description}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Ataque"
        name="atack"
        type="number"
        value={formInputs.atack}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Defesa"
        name="defense"
        type="number"
        value={formInputs.defense}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        select
        id="outlined-name"
        label="Tipo"
        name="cardType"
        value={formInputs.cardType}
        onChange={handleChange}
      >
        {cardTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        select
        id="outlined-name"
        label="Classes"
        name="cardClass"
        value={formInputs.cardClass}
        onChange={handleChange}
      >
        {cardClasses.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button
        onClick={() => {
          createCard(
            formInputs.name,
            formInputs.description,
            formInputs.atack,
            formInputs.defense,
            formInputs.cardType,
            formInputs.cardClass
          );
        }}
        fullWidth
        variant="contained"
      >
        Criar usuario
      </Button>
    </LoginBox>
  </Grid></>
   
  );
}

export default Dashboard;
