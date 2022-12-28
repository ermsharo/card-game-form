import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

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
    <Grid>
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
          InputProps={{ inputProps: { min: "0", max: "10", step: "0" } }}
        />

        <TextField
          fullWidth
          select
          id="outlined-name"
          label="Tipo"
          name="cardType"
          value={formInputs.cardType}
          onChange={handleChange}
          InputProps={{ inputProps: { min: "0", max: "10", step: "0" } }}
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
            // singIn();
          }}
          fullWidth
          variant="contained"
        >
          Login
        </Button>
      </LoginBox>
    </Grid>
  );
}

export default Dashboard;
