import styled from "styled-components";

export const UserDataSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(6px);
  border-radius: 1.2rem;

  .avatar {
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 15px rgba(255,255,255,0.1);
  }

  h2 {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.grey};
    display: flex;
    gap: .5rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
