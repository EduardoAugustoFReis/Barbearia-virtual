"use client";
import styled from "styled-components";

export const MenuContainer = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  button {
    background: none;
    border: none;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid #fff;
    padding: 0.8rem;
    border-radius: 0.4rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }

  .close {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.backgroundForm};
    
    padding: 1.2rem;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.0rem;
    display: ${({ open }) => (open ? "flex" : "none")};

    z-index: 9999;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 1rem 1rem;

    .close {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.white};
    }

    button {
      width: 100%;
      text-align: center;
    }
  }
`;
