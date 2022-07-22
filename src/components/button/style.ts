import styled from "styled-components";

export const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    background: #fff;
    color: #000;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #213547;
    border-radius: 4px;
    padding: 10px 25px;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  button:disabled {
    cursor: not-allowed;
  }
`;
