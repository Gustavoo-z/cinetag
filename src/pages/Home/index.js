import Card from "components/Card";
import { Title } from "components/Title";
import { useVideos } from "contexts/videoContext";

export function Home() {
  const { videos } = useVideos();
  return (
    <>
      <Title>Um lugar para guardar seus vídeos e filmes!</Title>
      <Card videos={videos} />
    </>
  );
}
