import styled from "styled-components";

export const FetchServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;

  .serviceCard {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundForm};
    border: 2px solid ${({ theme }) => theme.colors.white};
    padding: 2.4rem;
    border-radius: 0.8rem;
    gap: .5rem;

    .deleteService {
      top: 0.5rem;
      right: 0.5rem;
      position: absolute;
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.grey};

      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    h3 {
      margin-top: 0.5rem;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
    }
    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
