import styled from "styled-components";

export const ListStyled = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0;

    li {
      padding: 0 0.5rem;
      cursor: pointer;
    }

    .emphasisStyle {
      font-weight: bold;
    }
  }
`;
