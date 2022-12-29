import styled from "styled-components";
import ListElement from "./ListElement";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90vw;
  margin: auto;
  grid-column-gap: 32px;

  @media (min-width: 1300px) {
    width: 80vw;
  }
`;

const CardsList = styled.div`
  padding-top: 32px;
  grid-column: 3/7;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const getIdList = () => {
  let idList = localStorage.getItem("idList");
  if (idList === null) {
    return [];
  }
  return JSON.parse(idList);
};

const getCardById = (id: number): string => {
  let card: any = localStorage.getItem(`${id}`);
  if (card == null) card = undefined;
  return card;
};

interface cardType {
  id: number;
  name: string;
  description: string;
  atack: number;
  defense: number;
  cardType: string;
  cardClass: string;
}

const getList = () => {
  return getIdList().map((cardId: number) => {
    return JSON.parse(getCardById(cardId));
  });
};

console.log("Card list ->", getList());

function CardList({ data, deleteCard, addCard }: any) {
  if (!data) return <h1>Erro ao carregar os dados</h1>;

  return (
    <Grid>
      <CardsList>
        {data.map((card: cardType) => (
          <div>
            <ListElement
              element={card}
              deleteCard={deleteCard}
              addCard={addCard}
            />
          </div>
        ))}
      </CardsList>

      <div></div>
    </Grid>
  );
}

export default CardList;
