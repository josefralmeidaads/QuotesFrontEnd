import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face { 
    font-family: 'GraphikBlack';
    src: url('./fonts/GraphikBlack.otf') format('opentype');
  }

  @font-face { 
    font-family: 'GraphikRegular';
    src: url('./fonts/GraphikRegular.otf') format('opentype');
  }

  @font-face { 
    font-family: 'GraphikSemiBold';
    src: url('./fonts/GraphikSemiBold.otf') format('opentype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;