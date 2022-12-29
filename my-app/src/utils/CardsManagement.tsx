import { useState, useEffect } from "react";
import {getIdList} from "./dataManagement";

export const CardsManagement = () => {
  const [data, setData] = useState(null); //retorna a lista de cartas aqui
  const [page, setPage] = useState(0);
  const [update, setUpdate] = useState(false);



  useEffect(() => {



  }, [page]);

  return [{ data}, setPage];
};
