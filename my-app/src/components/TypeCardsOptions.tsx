import styled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";


const CardOptionsBox = styled.div`
padding: 16px;
text-align: left; 
`;

function TypeCardsOptions() {
  const [cardClasses, setCardClasses] = React.useState({
    mago: true,
    paladino: true,
    caçador: true,
    druida: true,
    qualquer: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardClasses({
      ...cardClasses,
      [event.target.name]: event.target.checked,
    });
  };

  const { mago, paladino, caçador, druida, qualquer} = cardClasses;

  return (
   
      <CardOptionsBox>
        <FormLabel component="legend">Tipos</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={mago} onChange={handleChange} name="mago" />
            }
            label="Mago"
          />
             <FormControlLabel
            control={
              <Checkbox checked={paladino} onChange={handleChange} name="paladino" />
            }
            label="Paladino"
          />
               <FormControlLabel
            control={
              <Checkbox checked={caçador} onChange={handleChange} name="caçador" />
            }
            label="Caçador"
          />
               <FormControlLabel
            control={
              <Checkbox checked={druida} onChange={handleChange} name="druida" />
            }
            label="Druida"
          />

           </FormGroup>
      </CardOptionsBox>
  );
}

export default TypeCardsOptions;
