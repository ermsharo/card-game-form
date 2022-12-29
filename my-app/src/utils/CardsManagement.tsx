import { useState, useEffect } from "react";
import { getIdList, getCardsList, removeIdFromIdList } from "./dataManagement";

export const CardsManagement = () => {
  const [data, setData] = useState([]); //retorna a lista de cartas aqui
  const [update, setUpdate] = useState(false);

  const deleteCard = (id: number) => {
    removeIdFromIdList(id);
  };

  const verifyGame = () => {
    //arr.some(item => item.a === 'b')
  };

  const editCard = (element: any) => {
    //Se não existir criar, caso contrario editar
    console.log("element", element);
  };

  useEffect(() => {
    setData(getCardsList());
  }, [data]);

  return [data, deleteCard, editCard];
};
