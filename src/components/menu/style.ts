import styled from "styled-components";

export const MenuStyled = styled.nav`
  height: 100%;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  background: #213547;
  color: #fff;
  ul {
    justify-content: space-between;
    padding: 1rem;
    li span:last-child {
      padding-left: 0.5rem;
    }
  }
`;
