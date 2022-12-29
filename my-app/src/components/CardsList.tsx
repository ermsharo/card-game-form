import styled from "styled-components";
import ListElement from "./ListElement";

const CardsList = styled.div`
  padding-top: 32px;
  grid-column: 3/7;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CardsListElement = styled.div`
  -webkit-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 0.25rem;
`;

interface cardType {
  id: number;
  name: string;
  description: string;
  atack: number;
  defense: number;
  cardType: string;
  cardClass: string;
}

function CardList({ data, deleteCard, editCard, fileteredData }: any) {
  if (!data) return <h1>Erro ao carregar os dados</h1>;

  return (
    <CardsList>
      {fileteredData.map((card: cardType) => (
        <CardsListElement>
          <ListElement
            element={card}
            deleteCard={deleteCard}
            editCard={editCard}
          />
        </CardsListElement>
      ))}
    </CardsList>
  );
}

export default CardList;
