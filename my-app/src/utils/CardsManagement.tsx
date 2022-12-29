import { useState, useEffect } from "react";
import {
  getCardsList,
  removeIdFromIdList,
  createCard,
  editCardById,
} from "./dataManagement";

export const CardsManagement = (searchText: string, searchSwitch: boolean) => {
  const [data, setData] = useState<any>([]); //retorna a lista de cartas aqui
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

  const filterDataFromText = () =>{
    const filtered =  data.filter((cards:any) => cards.name.includes(searchText));
    console.log(filtered);

  }

  const filterDataByChoice = () => {
    if (searchSwitch) {
      console.log("Pequisando por id" )
    }else{
      console.log("Pequisando por nome" )
      filterDataFromText()
    }
  };

  const filterDataByType = () => {};

  const filterDataByClass = () => {};

  useEffect(() => {
    console.log("search text", searchText);
    filterDataByChoice()
  }, [searchText]);

  return [data, deleteCard, editCard];
};
