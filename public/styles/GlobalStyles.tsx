import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Fredoka One';
    src: local('Fredoka One'), local('FredokaOne'),
    url('/fonts/fredoka-one-v13-latin-regular.woff2') format('woff2'),
    url('/fonts/fredoka-one-v13-latin-regular.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    src: local(NanumSquareNeo), 
    url('/fonts/NanumSquareNeo-Variable.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poetsen One Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Poetsen One Regular'), 
    url('/fonts/PoetsenOne-Regular.woff') format('woff');
    }

  /* body의 margin과 padding 값을 모두 0으로 설정 */
  body {
    margin: 0;
    padding: 0;
  }
`;
