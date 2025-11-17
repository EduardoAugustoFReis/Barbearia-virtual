import styled from "styled-components";

export const AppointmentClientHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  .history {
    position: relative;
    background-color: ${({ theme }) =>
      theme.colorsAppointment.greyAppointmentCard};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 1.6rem 2rem;
    border-radius: 1rem;
    border: 1px solid
      ${({ theme }) => theme.colorsAppointment.strongAppointmentCard};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    h3 {
      font-size: 1.9rem;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.grey};
      line-height: 1.4;

      span {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .deleteAppointment {
      top: 1.0rem;
      right: 1.0rem;
      position: absolute;
      font-size: 1.6rem;
      border-radius: 0.8rem;
      padding: 0.8rem;
      border: none;
      background-color: ${({ theme }) =>
        theme.colorsAppointment.cancelAppointmentButton};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) =>
          theme.colorsAppointment.cancelAppointmentButtonHover};
      }
      color: ${({ theme }) => theme.colors.grey};
    }

    .status {
      margin-top: 0.8rem;
      padding: 0.5rem 0.9rem;
      border-radius: 0.4rem;
      font-size: 1.3rem;
      font-weight: 600;
      text-transform: capitalize;
      align-self: flex-end;

      &.confirmed {
        background-color: ${({ theme }) =>
          theme.colorsAppointment.confirmedBackground};
        color: ${({ theme }) => theme.colorsAppointment.confirmedColor};
      }

      &.pending {
        background-color: ${({ theme }) =>
          theme.colorsAppointment.pendingBackground};
        color: ${({ theme }) => theme.colorsAppointment.pendingColor};
      }

      &.cancelled {
        background-color: ${({ theme }) =>
          theme.colorsAppointment.canceledBackground};
        color: ${({ theme }) => theme.colorsAppointment.canceledColor};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.6rem;

    .history {
      padding: 1.2rem 1.4rem;

      h3 {
        font-size: 1.7rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`;
