import { useState, useEffect } from "react";
import {
  getCardsList,
  removeIdFromIdList,
  createCard,
  editCardById,
} from "./dataManagement";

export const CardsManagement = (
  searchText: string,
  searchSwitch: boolean,
  classTags: any,
  typeTags: any
) => {
  const [data, setData] = useState<any>([]); //retorna a lista de cartas aqui
  const [filteredData, setFilteredData] = useState<any>([]);

  const deleteCard = (id: number) => {
    removeIdFromIdList(id);
    setData(getCardsList());
  };

  const verifyClass = (element: any) => {
    let elemClass = element.cardClass.toLowerCase();
    if (classTags[elemClass]) return true;
    return false;
  };
  const filterByTags = () => {
    const results = filteredData.filter((element: any) => {
      return verifyClass(element);
    });
    return results;
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
    //Se não existir criar, caso contrario editar
    if (id === -1) {
      //Caso de criação
      createCard(name, description, atack, defense, cardType, cardClass);
    } else {
      //caso de edição
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
    // console.log(filtered);
    setFilteredData(filtered);
  };

  const filterDataFromId = () => {
    const filtered = data.filter(
      (cards: any) => cards.id === Number(searchText)
    );

    setFilteredData(filtered);
  };

  const filterDataByChoice = () => {
    if (searchText === "") {
      setFilteredData(data);
      return;
    }
    if (searchSwitch) {
      filterDataFromId();
    } else {
      filterDataFromText();
    }
  };

  useEffect(() => {
    filterDataByChoice();
  }, [searchText, data, classTags, typeTags, filterDataByChoice]);

  const updateResearchFromTags = () => {
    setFilteredData(filterByTags());
  };

  useEffect(() => {
    // console.log("typeTags", typeTags);
  }, [classTags, typeTags]);

  return [data, filteredData, deleteCard, editCard];
};
