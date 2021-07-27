import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      success: string;
      white: string;
      gray_100: string;
      gray_200: string;
      gray_300: string;
    }
  }
}