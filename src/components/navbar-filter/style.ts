import styled from "styled-components";

export const NavbarFilterStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 50px;
  border: 1px solid #213547;
  border-radius: 7px;
  margin: 15px;

  .filter-by-search {
    height: 100%;
    width: 30%;
    padding: 4px;

    input {
      width: 100%;
      height: 100%;
      border: 0;
      outline: none;
      padding: 0 10px;
    }

    input:focus {
      border-right: 1px solid #213547;
    }

    @media only screen and (max-width: 600px) {
      input {
        width: 80%;
      }
    }
  }

  .filter-by-categories {
    width: 60%;
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
  }
`;
