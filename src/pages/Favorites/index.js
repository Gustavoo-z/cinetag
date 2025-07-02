import Card from "components/Card";
import { Title } from "components/Title";
import { useVideos } from "contexts/videoContext";
import styled from "styled-components";

const StyledTitle = styled.h3`
  color: var(--preto);
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  padding: 99.7px 0;
`;

export default function Favorites() {
  const { favorites } = useVideos();

  function verifyFavorites(favorites) {
    if (favorites.length === 0)
      return <StyledTitle>Você ainda não possui nenhum favorito.</StyledTitle>;
    return <Card videos={favorites} />;
  }

  return (
    <>
      <Title>Meus favoritos</Title>
      <>{verifyFavorites(favorites)}</>
    </>
  );
}
