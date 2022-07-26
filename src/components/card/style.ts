import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 1px solid #213547;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .image-content {
    display: flex;
    width: 100%;
    height: 200px;
    cursor: pointer;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #213547;
    padding: 0.5rem 0;
    width: 100%;
    span {
      font-size: 14px;
      font-style: italic;
      text-transform: uppercase;
      color: #fff;
      padding-left: 1.2rem;
      cursor: pointer;
    }

    .star {
      padding-right: 1.2rem;
      font-size: 24px;
      color: #fff;
      cursor: pointer;
    }

    .checkedStar {
      color: #f1f15c;
    }
  }
`;
