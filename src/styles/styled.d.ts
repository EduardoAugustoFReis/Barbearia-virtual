import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundPage: string;
      backgroundForm: string;
      green: string;
      greenHover: string;
      grey: string;
      white: string;
      error: string;
    };
    colorsAppointment: {
      cardColorAppointment: string;
      greyAppointmentCard: string;
      strongAppointmentCard: string;
      pendingBackground: string;
      pendingColor: string;
      confirmedBackground: string;
      confirmedColor: string;
      canceledBackground: string;
      canceledColor: string;
      cancelAppointmentButton: string;
      cancelAppointmentButtonHover: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
