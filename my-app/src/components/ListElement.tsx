import styled from "styled-components";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import React from "react";

export interface cardType {
  id: number;
  name: string;
  description: string;
  atack: number;
  defense: number;
  cardType: string;
  cardClass: string;
}

const CardInfo = styled.div`
  font-size: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const CardName = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  text-transform: capitalize;
  width: 100%;
  padding: 1rem;
`;

const CardLine = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const BottonLine = styled.div`
  display: flex;
  gap: 1.5rem;
`;



function ListElement({ element }: any) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  let { id, name, description, atack, defense, cardType, cardClass } = element;

  const handleChange =
    () => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(!expanded);
    };

  return (
    <MuiAccordion expanded={expanded} onChange={handleChange()}>
      <MuiAccordionSummary>
{(expanded) ? (      <CardName>
        <div>{name}</div> <BottonLine>

          <div>🗑️</div>
          <div>✏️</div>
        </BottonLine>
      </CardName>) : (    <CardName>
      <div>{`${name}`}</div>
      <div>{`⚔️ ${atack} 🛡️ ${defense}`}</div>
    </CardName>)}
      </MuiAccordionSummary>
      <MuiAccordionDetails>
        <CardInfo>
          <CardLine>
            {" "}
            <div>⚔️ Ataque: {atack} </div>
            <div>🛡️ Defesa: {defense} </div>
          </CardLine>

          <div> Descrição: {description} </div>
          <CardLine>
            <div> Tipo: {cardType} </div>
            <div> Classe: {cardClass} </div>
          </CardLine>
        </CardInfo>
      </MuiAccordionDetails>
    </MuiAccordion>
  );
}

export default ListElement;
