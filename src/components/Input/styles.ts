import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.8rem;
    color: ${({theme}) => theme.colors.grey};
  }

  input {
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.white};
    padding: 0.8rem;
    border-radius: 0.8rem;
    border: 1px solid #fff;
    background-color: transparent;
  }
`;