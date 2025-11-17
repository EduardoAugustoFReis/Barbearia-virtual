"use client";
import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
`;

export const HomePageContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

export const GreetingSectionHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundForm};
  border-radius: 0.8rem;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.2rem;
    gap: 1.2rem;
  }

  .text-box {
    flex: 1;
    max-width: 450px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(6px);
    border-radius: 1rem;
    padding: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 1.4rem;
    }

    h2 {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 1rem;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.4rem;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.grey};
      margin-bottom: 0.6rem;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.6rem;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.4rem;
      }
    }
  }
`;
