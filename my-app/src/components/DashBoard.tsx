/* eslint-disable @typescript-eslint/no-unused-vars */
import CardList from "./CardsList";
import NewCard from "./NewCard";
import AppBar from "@mui/material/AppBar";
import { CardsManagement } from "./../utils/CardsManagement";
import styled from "styled-components";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

const DashboardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 60vw;
  margin: auto;
  grid-column-gap: 2rem;
  margin-top: 4rem;
  padding: 2rem;
`;

const HeaderBox = styled.div`
  padding: 2rem;
  font-size: 2rem;
  text-align: left;
`;

const DashboardSearchBox = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  input {
    font-size: 1.5rem;
  }
`;

// const OptionsBox = styled.div`
//   grid-column: 1/3;
// `;

const CardListBox = styled.div`
  grid-column: 1/9;
`;

function Dashboard() {
  const [search, setSearch] = useState("");
  const [searchSwitch, setSearchSwitch] = useState(true);
  const [classTags, setClassTags] = useState({
    mago: true,
    paladino: true,
    caçador: true,
    druida: true,
    qualquer: true,
  });
  const [typeTags, setTypeTags] = useState({
    magia: true,
    criatura: true,
  });

  function handleChange(evt: any) {
    setSearch(evt.target.value);
  }

  const handleChangeSearchSwitch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchSwitch(event.target.checked);
  };

  const [data, fileteredData, deleteCard, editCard] = CardsManagement(
    search,
    searchSwitch,
    classTags,
    typeTags
  );
  return (
    <>
      <AppBar position="static">
        <HeaderBox>Gerenciador de cartas</HeaderBox>
      </AppBar>
      <DashboardBox>
        {/* <OptionsBox>
          <ClassCardOptions setClassTags={setClassTags} />
          <TypeCardOptions setTypeTags={setTypeTags} />
        </OptionsBox> */}

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
          {}
          <CardList
            data={data}
            deleteCard={deleteCard}
            editCard={editCard}
            fileteredData={fileteredData}
            search={search}
          />
          <NewCard editCard={editCard} setSearch={setSearch} />
        </CardListBox>
      </DashboardBox>
    </>
  );
}

export default Dashboard;
