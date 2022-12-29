import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { cardTypes, cardClasses } from "./../utils/cardTypes";

const NewCardBox = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;




function EditCard({ element, editCard }: any) {
  let { id, name, description, atack, defense, cardType, cardClass } = element;

  const [formInputs, setFormInputs] = useState({
    name: name,
    description: description,
    atack: atack,
    defense: defense,
    cardType: cardType,
    cardClass: cardClass,
  });

  function handleChange(evt: any) {
    const value = evt.target.value;
    setFormInputs({
      ...formInputs,
      [evt.target.name]: value,
    });
  }

  return (
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
          editCard(
            id,
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
        Salvar alterações
      </Button>
    </NewCardBox>
  );
}

export default EditCard;
