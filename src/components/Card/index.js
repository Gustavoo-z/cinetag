import styled from "styled-components";
import favoriteActive from "./favorite.png";
import favoriteInactive from "./favorite_outline.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 200px;
  gap: 24px;
  margin-bottom: 30px;
`;

const StyledCard = styled.figure`
  max-width: 282px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  img {
    display: block;
  }
`;

const StyledFigCaption = styled.figcaption`
  position: relative;
  background-color: #e2e2e2;
  display: block;
  height: 120px;
  max-width: 100%;
  padding: 20px 30px 20px 30px;
  text-align: start;
  font-size: 18px;
  font-weight: 600;
  img {
    position: absolute;
    bottom: 20px;
    cursor: pointer;
  }
`;

export default function Card({ filmes, setFilmes }) {
  const filmesInicial = [...filmes][0];
  function toggleFavorite(filme) {
    filme.favorite = !filme.favorite;
    setFilmes([...filmes]);
  }
  function verifyFavorite(favorite) {
    favorite ? (favorite = favoriteActive) : (favorite = favoriteInactive);
    return favorite;
  }

  return (
    <Container>
      {filmesInicial.map((filme) => (
        <StyledCard key={filme.id}>
          <img src={filme.capa} alt={filme.titulo} />
          <StyledFigCaption>
            {filme.titulo}
            <img
              onClick={() => toggleFavorite(filme)}
              src={verifyFavorite(filme.favorite)}
              alt="Favorito"
            />
          </StyledFigCaption>
        </StyledCard>
      ))}
    </Container>
  );
}
