'use client'
import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10.0rem;
  padding: 1.2rem;
  background-color: ${({theme}) => theme.colors.backgroundForm};

  .logo {
    border-radius: 0.8rem;
  }

  .icons {
    display: flex;
    gap: 1.0rem;
  }
`;