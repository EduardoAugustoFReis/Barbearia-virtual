"use client";
import styled from "styled-components";

export const PageSignUpContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url("/logo barbearia.png") center center no-repeat;
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const SignUpSection = styled.div`
  flex: 1;
  display: grid;
  place-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
