import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {createCard} from "./../utils/dataManagement"

const NewCardBox = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

const GridSpace = styled.div`
  grid-column: 3/7;
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

function EditCard() {
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
      <GridSpace>


          <NewCardBox>
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
          </NewCardBox>
      </GridSpace>
    </Grid>
  );
}

export default EditCard;
