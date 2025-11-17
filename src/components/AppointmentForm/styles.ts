import styled from "styled-components";

export const AppointmentFormContainer = styled.form`
  margin: 0 auto;
  width: 65rem;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundForm};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 0.8rem;

  label {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.6rem;
  }

  select {
    padding: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.backgroundForm};

  }

  button {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.2rem;
    border-radius: 0.8rem;
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.greenHover};
    }
  }
`;
