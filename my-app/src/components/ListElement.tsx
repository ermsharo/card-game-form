import styled from "styled-components";
import Typography from "@mui/material/Typography";
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

function ListElement({ element }: any) {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange =
    () => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(!expanded);
    };

  return (
    <MuiAccordion expanded={expanded} onChange={handleChange()}>
      <MuiAccordionSummary>
        <Typography>{element.name}</Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </MuiAccordionDetails>
    </MuiAccordion>
  );
}

export default ListElement;
