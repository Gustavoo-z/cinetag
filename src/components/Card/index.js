import { useVideos } from "contexts/videoContext";
import styled from "styled-components";

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
  background-color: var(--cinza);
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

export default function Card({ videos }) {
  const { toggleFavorite, verifyFavorite } = useVideos();
  return (
    <Container>
      {videos.map((video) => (
        <StyledCard key={video.id}>
          <img src={video.capa} alt={video.titulo} />
          <StyledFigCaption>
            {video.titulo}
            <img
              onClick={() => toggleFavorite(video)}
              src={verifyFavorite(video.favorite)}
              alt="Favorito"
            />
          </StyledFigCaption>
        </StyledCard>
      ))}
    </Container>
  );
}
