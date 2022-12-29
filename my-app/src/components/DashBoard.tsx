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
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

const DashboardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 80vw;
  margin: auto;
  grid-column-gap: 2rem;
  margin-top: 4rem;
`;

const DashboardSearchBox = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  input {
    font-size: 1.5rem;
  }
`;

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

  const [searchSwitch, setSearchSwitch] = useState(true);

  const handleChangeSearchSwitch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchSwitch(event.target.checked);
  };

  const [data, fileteredData, deleteCard, editCard] = CardsManagement(
    search,
    searchSwitch
  );
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Hearstone app
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
            <TextField
              fullWidth
              id="outlined-name"
              label="Pesquisar"
              value={search}
              onChange={handleChange}
            />
            <Stack direction="row" spacing={1} alignItems="center">
              <div>Nome</div>
              <Switch
                checked={searchSwitch}
                onChange={handleChangeSearchSwitch}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div>Id</div>
            </Stack>
          </DashboardSearchBox>
          <CardList data={data} deleteCard={deleteCard} editCard={editCard}  fileteredData = {fileteredData} search={search}/>
          <NewCard editCard={editCard} />
        </CardListBox>
      </DashboardBox>
    </>
  );
}

export default Dashboard;
