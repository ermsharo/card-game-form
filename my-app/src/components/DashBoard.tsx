import CardList from "./CardsList";
import NewCard from "./NewCard";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CardsManagement } from "./../utils/CardsManagement";
import styled from "styled-components";
import ClassCardOptions from "./ClassCardsOptions";
import TypeCardOptions from "./TypeCardsOptions";
import { useState } from "react";
import TextField from "@mui/material/TextField";
const DashboardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 80vw;
  margin: auto;
  grid-column-gap: 2rem;
  margin-top: 4rem;
`;

const DashboardSearchBox = styled.div``;

const OptionsBox = styled.div`
  grid-column: 1/3;
`;

const CardListBox = styled.div`
  grid-column: 3/9;
`;

function Dashboard() {
  const [search, setSearch] = useState("");

  function handleChange(evt: any) {
    setSearch(evt.target.value);
  }

  const [data, deleteCard, editCard] = CardsManagement();
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Card app
          </Typography>
        </Toolbar>
      </AppBar>
      <DashboardBox>
        <OptionsBox>
          <ClassCardOptions />
          <TypeCardOptions />
        </OptionsBox>

        <CardListBox>
          <DashboardSearchBox>
            {search}
            <TextField
              fullWidth
              id="outlined-name"
              label="Pesquisar"
              value={search}
              onChange={handleChange}
            />
          </DashboardSearchBox>
          <CardList data={data} deleteCard={deleteCard} editCard={editCard} />
          <NewCard editCard={editCard} />
        </CardListBox>
      </DashboardBox>
    </>
  );
}

export default Dashboard;
