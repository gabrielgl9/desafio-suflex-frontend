import styled from "styled-components";

export const ListStyled = styled.div<{ cursorOnlyInAHref: boolean }>`
  ul {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0;
    padding: 0;

    li {
      padding: 0 0.5rem;
      cursor: ${(props) => (props.cursorOnlyInAHref ? "auto" : "pointer")};
    }

    .emphasisStyle {
      font-weight: bold;
    }
  }
`;
