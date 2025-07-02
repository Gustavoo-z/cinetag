import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80.7vh;
`;

export default function NotFound() {
  return (
    <StyledDiv>
      <h1>Ops!</h1>
      <h2>A página que você procura não foi encontrada.</h2>
    </StyledDiv>
  );
}
