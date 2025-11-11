import styled from "styled-components";

export const SectionsHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({theme}) => theme.colors.grey};
  border-radius: 0.8rem;
  padding: 1.6rem;
  margin: 1.0rem 0rem;
  h2 {
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.white};
  }
`;