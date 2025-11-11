"use client"  
import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.0rem;

  button {
    background: none;
    border: none;
    font-size: 1.6rem;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid #fff;
    padding: 0.8rem;
    border-radius: 0.4rem;

    &:hover {
      background-color: ${({theme}) => theme.colors.grey};
    }
  }
`;