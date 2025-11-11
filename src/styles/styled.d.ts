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
    fonts: {
      primary: string;
      secondary: string;
    },
    breakpoints: {
    mobile: string,
    tablet: string,
    desktop: string,
  },
  }
}
