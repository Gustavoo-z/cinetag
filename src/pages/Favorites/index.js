import Card from "components/Card";
import { Title } from "components/Title";
import { useVideos } from "contexts/videoContext";

export default function Favorites() {
  const { favorites } = useVideos();

  return (
    <>
      <Title>Meus favoritos</Title>
      <Card videos={favorites || []} />
    </>
  );
}
