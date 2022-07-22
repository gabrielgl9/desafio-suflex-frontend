import styled from "styled-components";

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 15px;
  margin-top: 20px;
  color: #fff;
  background: #213547;
  .content h3 {
    margin-top: 0;
  }
`;
