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

interface cardType {
  id: number;
  name: string;
  description: string;
  atack: number;
  defense: number;
  cardType: string;
  cardClass: string;
}

function CardList({ data, deleteCard, editCard }: any) {
  if (!data) return <h1>Erro ao carregar os dados</h1>;

  return (
    <Grid>
      <CardsList>
        {data.map((card: cardType) => (
          <div>
            <ListElement
              element={card}
              deleteCard={deleteCard}
              editCard={editCard}
            />
          </div>
        ))}
      </CardsList>

      <div></div>
    </Grid>
  );
}

export default CardList;
