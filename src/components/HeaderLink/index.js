import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const SectionNavList = styled.ul`
  display: flex;
  gap: 60px;
`;

const StyledLink = styled(Link)`
  color: #f0f0f0;
  list-style: none;
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
`;

export default function HeaderLink() {
  const location = useLocation();
  return (
    <>
      <SectionNavList>
        <StyledLink $active={location.pathname === "/"} to="/">
          Home
        </StyledLink>
        <StyledLink
          $active={location.pathname === "/favoritos"}
          to="/favoritos"
        >
          Favoritos
        </StyledLink>
      </SectionNavList>
    </>
  );
}
