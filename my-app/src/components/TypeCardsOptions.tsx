import styled from "styled-components";
import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CardOptionsBox = styled.div`
  padding: 16px;
  text-align: left;
`;

function TypeCardsOptions({setTypeTags}:any) {
  const [cardTypes, setTypeCards] = React.useState({
    magia: true,
    criatura: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeCards({
      ...cardTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const { magia, criatura } = cardTypes;

  return (
    <CardOptionsBox>
      <FormLabel component="legend">Tipos</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={magia} onChange={handleChange} name="magia" />
          }
          label="Magia"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={criatura}
              onChange={handleChange}
              name="criatura"
            />
          }
          label="Criatura"
        />
      </FormGroup>
    </CardOptionsBox>
  );
}

export default TypeCardsOptions;
