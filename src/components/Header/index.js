import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";
import HeaderLink from "components/HeaderLink";
import { useVideos } from "contexts/videoContext";

const SectionNav = styled.nav`
  background-color: var(--preto);
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SectionBanner = styled.div`
  img {
    width: 100%;
  }
`;

export default function Header({ banner }) {
  const { videos } = useVideos();
  const { pathname } = useLocation();
  const { id } = useParams();

  const isPlayerRoute = pathname.startsWith("/player/");
  const idNumber = Number(id);
  const idInvalido =
    isPlayerRoute && !videos.some((video) => video.id === idNumber);

  const mostrarBanner = !idInvalido;

  return (
    <>
      <SectionNav>
        <Link to="/">
          <img src={logo} alt="Logo CineTag" />
        </Link>
        <HeaderLink />
      </SectionNav>
      <SectionBanner>
        {mostrarBanner && <img src={banner} alt="" />}
      </SectionBanner>
    </>
  );
}
