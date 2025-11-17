import styled from "styled-components";

export const FetchBarbersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.0rem;
  .barbersCard {
    position: relative;
    background-color: ${({ theme }) => theme.colors.backgroundForm};
    padding: 0.8rem;
    border-radius: 0.8rem;
    width: 40rem;
    text-align: center;

    .deleteBarber {
      right: 1rem;
      position: absolute;
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.grey};

      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    h3 {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.grey};
    }

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.grey};
    }

    img {
      object-fit: cover;
      border-radius: 50%;
    }
  }

`;
