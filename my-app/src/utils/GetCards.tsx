import { useState, useEffect } from "react";
import { getIdList, getCardById } from "./dataManagement";

export const CardsManagement = () => {
  const [data, setData] = useState([]); //retorna a lista de cartas aqui
  const [update, setUpdate] = useState(false);

  const deleteCard = (id: number) => {
    //Pega o card pelo id e deleta
  };
  const editCard = () => {
    //Se não existir criar, caso contrario editar
  };

  const getList = () => {
    return getIdList().map((cardId: number) => {
      return JSON.parse(getCardById(cardId));
    });
  };

  useEffect(() => {
    setData(getList());
  }, [update]);

  return [{ data }, deleteCard, editCard];
};
