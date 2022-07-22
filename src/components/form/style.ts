import styled from "styled-components";

export const FormStyled = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 1px solid #213547;
    border-radius: 4px;
    padding: 2rem;
    margin: 1rem;
    width: 50vw;

    div:not(:last-child) {
      padding-bottom: 2rem;
      width: 90%;
      margin-left: -0.75rem;
    }

    input {
      border: 1px solid #213547;
      border-radius: 4px;
      padding: 0.5rem 0.25rem;
    }
  }
`;
