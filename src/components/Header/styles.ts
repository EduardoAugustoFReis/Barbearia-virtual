"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.backgroundForm};
  .logo {
    border-radius: 0.8rem;
  }

  .burger {
    background: none;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    display: none; 
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    .burger {
      display: block; 
    }
  }
`;
