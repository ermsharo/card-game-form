export const getIdList = () => {
  let idList = localStorage.getItem("idList");
  if (idList === null) {
    return [];
  }
  return JSON.parse(idList);
};

export const getCardsList = () => {
  return getIdList().map((cardId: number) => {
    return JSON.parse(getCardById(cardId));
  });
};

const getCardById = (id: number): string => {
  let card: any = localStorage.getItem(`${id}`);
  if (card == null) card = undefined;
  return card;
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const getLastId = () => {
  let referenceIdList = getIdList();
  if (referenceIdList == null) {
    return 0;
  }
  let reference = getIdList();
  if (reference.length == 0) return 0;
  reference.sort();
  return parseInt(reference.slice(-1));
};

export const setIdList = (IdList: any) => {
  console.log("id list atualizando");
  localStorage.setItem("idList", JSON.stringify(IdList));
};

export const setSearchList = (searchList: any) => {
  console.log("id list atualizando");
  localStorage.setItem("searchList", JSON.stringify(searchList));
};

export const getSearchList = (searchList: any) => {
  console.log("id list atualizando");
  localStorage.setItem("searchList", JSON.stringify(searchList));
};

export const removeIdFromIdList = (id: number) => {
  console.log("remove id from list chamado", id);
  let idList = getIdList();

  let filter = idList.filter(function (c: string) {
    return c !== `${id}`;
  });

  setIdList(filter);
  console.log("get id list", getIdList());
};

export const addId = () => {
  let nextId = getLastId() + 1;
  let idList: string[] = getIdList();
  let reference: string[] = [];
  reference.push(nextId.toString());
  setIdList(reference.concat(idList));
};

export const createCardObj = (
  id: number,
  name: string,
  description: string,
  atack: number,
  defense: number,
  cardType: string,
  cardClass: string
) => {
  return {
    id: id,
    name: name,
    description: description,
    atack: atack,
    defense: defense,
    cardType: cardType,
    cardClass: cardClass,
  };
};

export const editCardById = (
  id: number,
  name: string,
  description: string,
  atack: number,
  defense: number,
  cardType: string,
  cardClass: string
) => {
  localStorage.setItem(
    `${id}`,
    JSON.stringify(
      createCardObj(id, name, description, atack, defense, cardType, cardClass)
    )
  );
};

export const createCard = (
  name: string,
  description: string,
  atack: number,
  defense: number,
  cardType: string,
  cardClass: string
) => {
  let nextId = getLastId() + 1;
  addId();
  localStorage.setItem(
    nextId.toString(),
    JSON.stringify(
      createCardObj(
        nextId,
        name,
        description,
        atack,
        defense,
        cardType,
        cardClass
      )
    )
  );
};
