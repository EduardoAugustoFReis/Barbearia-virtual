import styled from "styled-components";

export const MyAccountForm = styled.form`
  margin: 1.0rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  border-radius: 0.8rem;


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
`;
