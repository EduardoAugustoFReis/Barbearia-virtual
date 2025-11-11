import styled from "styled-components";

export const SelectNewEmployeeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  label {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.grey};
  }

  select {
    padding: 0.8rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.backgroundPage};
    border-radius: 0.8rem;
    option {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.backgroundPage};
    }
  }
`;
