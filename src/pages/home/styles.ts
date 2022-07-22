import styled from "styled-components";

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 15px;
`;

export const MoreItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 15px;
  padding-bottom: 15px;
  button {
    width: 25%;
  }
`;
