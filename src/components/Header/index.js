import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";
import HeaderLink from "components/HeaderLink";

const SectionNav = styled.nav`
  background-color: var(--preto);
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Header({ banner }) {
  return (
    <>
      <SectionNav>
        <Link to="/">
          <img src={logo} alt="Logo CineTag" />
        </Link>
        <HeaderLink />
      </SectionNav>
      <>
        <img src={banner} alt="Banner Home" />
      </>
    </>
  );
}
