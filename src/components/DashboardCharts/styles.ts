import styled from "styled-components";

export const DashboardChartsContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;

  section {

    h3 {
      color: ${({theme}) => theme.colors.grey};
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }
`;