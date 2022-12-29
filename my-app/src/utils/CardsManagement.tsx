import { useState, useEffect } from "react";
import {
  getCardsList,
  removeIdFromIdList,
  createCard,
  editCardById,
} from "./dataManagement";

const setSearchList = (searchList: any) => {
  console.log("id list atualizando");
  localStorage.setItem("searchList", JSON.stringify(searchList));
};

const getSearchList = () => {
  let searchList = localStorage.getItem("searchList");
  if (searchList === null) {
    return [];
  }
  return JSON.parse(searchList);
};

export const CardsManagement = (searchText: string, searchSwitch: boolean) => {
  const [data, setData] = useState<any>([]); //retorna a lista de cartas aqui
  const [filteredData, setFilteredData] = useState<any>([]);

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
  };

  useEffect(() => {
    setData(getCardsList());
  }, [data]);

  const filterDataFromText = () => {
    const filtered = data.filter((cards: any) =>
      cards.name.includes(searchText)
    );
    console.log(filtered);
    setFilteredData(filtered)
  };

  const filterDataFromId = () => {
    const filtered = data.filter((cards: any) =>
      cards.id === (Number(searchText))
    );
    console.log(filtered);
    setFilteredData(filtered)
  };

  const verifyTags = () => {};

  const filterDataByChoice = () => {
    if (searchSwitch) {
      console.log("Pequisando por id");
      filterDataFromId();
    } else {
      console.log("Pequisando por nome");
      filterDataFromText();
    }
  };

  const filterDataByType = () => {};

  const filterDataByClass = () => {};

  useEffect(() => {
    console.log("search text", searchText);
    filterDataByChoice();
  }, [searchText]);

  return [data, filteredData, deleteCard, editCard];
};
