import Card from "components/Card";
import { Title } from "components/Title";
import filmesInicial from "../../json/db.json";
import { useState } from "react";

export function Home() {
  const [filmes, setFilmes] = useState([filmesInicial]);

  return (
    <>
      <Title>Um lugar para guardar seus vídeos e filmes!</Title>
      <Card filmes={filmes} setFilmes={setFilmes} />
      <Card filmes={filmes} setFilmes={setFilmes} />
    </>
  );
}
