import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
    url('NanumSquareNeo-Variable.woff2') format('woff2');
  }
`;
