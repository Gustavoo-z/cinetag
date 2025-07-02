import Iframe from "components/Iframe";
import { Title } from "components/Title";
import { useVideos } from "contexts/videoContext";
import NotFound from "pages/NotFound";
import { useParams } from "react-router-dom";

export default function Player() {
  const parametros = useParams();
  const { videos } = useVideos();

  const video = videos.find((v) => v.id === Number(parametros.id));

  if (!video) return <NotFound />;
  return (
    <>
      <Title>Player</Title>
      <Iframe link={video.link} />
    </>
  );
}
