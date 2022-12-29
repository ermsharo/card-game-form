import { useState, useEffect } from "react";
import {
  getCardsList,
  removeIdFromIdList,
  createCard,
  editCardById,
} from "./dataManagement";

export const CardsManagement = (searchText: string) => {
  const [data, setData] = useState([]); //retorna a lista de cartas aqui
  const deleteCard = (id: number) => {
    removeIdFromIdList(id);
    setData(getCardsList());
  };

  const editCard = (
    id: number,
    name: string,
    description: string,
    atack: number,
    defense: number,
    cardType: string,
    cardClass: string
  ) => {
    console.log("edit card chamado");
    //Se não existir criar, caso contrario editar
    if (id === -1) {
      //Caso de criação
      createCard(name, description, atack, defense, cardType, cardClass);
    } else {
      editCardById(id, name, description, atack, defense, cardType, cardClass);
    }
    setData(getCardsList());
  };

  useEffect(() => {
    setData(getCardsList());
  }, [data]);

  const filterDataByChoice = (choice: boolean, searchText: string) => {
    if (choice) {
    }
  };

  const filterDataByType = () => {};

  const filterDataByClass = () => {};

  useEffect(() => {
    console.log("search text", searchText);
  }, [searchText]);

  return [data, deleteCard, editCard];
};
