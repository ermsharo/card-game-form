import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { cardTypes, cardClasses } from "./../utils/cardTypes";

const CardTitle = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  text-transform: capitalize;
  width: 100%;
  padding: 1rem;
`;

const NewCardBox = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

const CardInfo = styled.div`
  font-size: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

function NewCard({ editCard }: any) {
  const [formInputs, setFormInputs] = useState({
    name: "",
    description: "",
    atack: 0,
    defense: 0,
    cardType: "Magia",
    cardClass: "Mago",
  });

  function handleChange(evt: any) {
    const value = evt.target.value;
    setFormInputs({
      ...formInputs,
      [evt.target.name]: value,
    });
  }
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChangeAccordion = () => () => {
    setExpanded(!expanded);
  };

  return (
    <MuiAccordion expanded={expanded} onChange={handleChangeAccordion()}>
      <MuiAccordionSummary>
        <CardTitle>{`Cadastrar nova carta  🎴 `}</CardTitle>
      </MuiAccordionSummary>
      <NewCardBox>
        <CardInfo>
          {" "}
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
                -1,
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
            Inserir nova carta
          </Button>
        </CardInfo>
      </NewCardBox>
    </MuiAccordion>
  );
}

export default NewCard;
