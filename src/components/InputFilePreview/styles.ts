import styled from "styled-components";

export const InputFilePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin: 1rem 0rem;

  input {
    display: none;
  }

  img {
    max-width: 15rem;
    border-radius: 0.8rem;
  }

  label {
    color: ${({theme}) => theme.colors.white};
    width: fit-content;
    cursor: pointer;
    background: transparent;
    font-size: 1.6rem;
    padding: 0.8rem;
    border: 1px solid #fff;
    border-radius: 0.8rem;
  }
`;
