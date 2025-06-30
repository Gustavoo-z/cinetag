import styled from "styled-components";

const StyledTitle = styled.h1`
  color: var(--preto);
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  padding: 60px 0;
`;

export function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
