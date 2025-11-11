"use client";
import styled from "styled-components";

export const NewServicePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.grey};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Main = styled.main`
  max-width: 100%;
  width: 80.0rem;

  padding: 1.6rem;
`;
