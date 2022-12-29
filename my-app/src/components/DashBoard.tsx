import { useState } from "react";
import styled from "styled-components";
import CardList from "./CardsList";
import NewCard from "./NewCard";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CardsManagement } from "./../utils/CardsManagement";

function Dashboard() {
  const [data, deleteCard, editCard] = CardsManagement();
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            app
          </Typography>
        </Toolbar>
      </AppBar>
      <CardList data={data} deleteCard={deleteCard} editCard={editCard} />
      <NewCard />
    </>
  );
}

export default Dashboard;
