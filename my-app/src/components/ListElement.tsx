import styled from "styled-components";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import React from "react";
import EditCard from "./EditCard";

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

const CardTitle = styled.div`
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
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BottonLine = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: end;
  width: 100%;
`;

function ListElement({ element, deleteCard, editCard }: any) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  let { id, name, description, atack, defense, cardType, cardClass } = element;

  const handleChange =
    () => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(!expanded);
    };

  return (
    <MuiAccordion expanded={expanded} onChange={handleChange()}>
      <MuiAccordionSummary>
        {expanded ? (
          <CardTitle>
            <div>
              {name} - ID: {id}
            </div>
          </CardTitle>
        ) : (
          <CardTitle>
            <div>{`${name} - ID: ${id}`}</div>
            <div>{`⚔️ ${atack} 🛡️ ${defense}`}</div>
          </CardTitle>
        )}
      </MuiAccordionSummary>
      <MuiAccordionDetails>
        {editMode !== true && (
          <CardInfo>
            <CardLine>
              <div>⚔️ Ataque: {atack} </div>
              <div>🛡️ Defesa: {defense} </div>
              <BottonLine>
                <div
                  onClick={() => {
                    deleteCard(id);
                  }}
                >
                  🗑️
                </div>
                <div
                  onClick={() => {
                    setEditMode(true);
                  }}
                >
                  ✏️
                </div>
              </BottonLine>
            </CardLine>
            <div> Descrição: {description} </div>
            <CardLine>
              <div> Tipo: {cardType} </div>
              <div> Classe: {cardClass} </div>
            </CardLine>
          </CardInfo>
        )}

        {editMode && (
          <EditCard
            element={element}
            editCard={editCard}
            setEditMode={setEditMode}
          />
        )}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
}

export default ListElement;
