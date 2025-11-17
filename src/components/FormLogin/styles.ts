import styled from "styled-components";

export const LoginFormContainer = styled.form`
  margin: 1rem auto;
  max-width: 100%;
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.backgroundForm};

  h2 {
    text-align: center;
    font-size: 2.6rem;
    color: ${({ theme }) => theme.colors.white};
  }

  h3 {
    text-align: center;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    padding: 0.8rem;
    border-radius: 0.8rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.greenHover};
    }
  }

  a {
    text-align: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.grey};
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
    max-width: 35rem;
    padding: 1.2rem;
  }
`;
