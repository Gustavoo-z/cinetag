import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--preto);
  color: var(--branco);
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Desenvolvido por Alura.</p>
    </StyledFooter>
  );
}
