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

function CardList() {
  return (
    <Grid>
      <CardsList>
        {getIdList().map(
          (cardId: number) =>
            getCardById(cardId) != null && (
              <ListElement element={JSON.parse(getCardById(cardId))} />
            )
        )}
      </CardsList>
      <div></div>
    </Grid>
  );
}

export default CardList;
