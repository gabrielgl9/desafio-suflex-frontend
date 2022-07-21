import styled from "styled-components";

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 15px;
`;

export const MoreItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    width: 25%;
  }
`;
