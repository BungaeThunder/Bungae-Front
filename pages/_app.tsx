import type { AppProps } from 'next/app';
import { GlobalStyles } from 'public/styles/GlobalStyles';
import theme from 'public/styles/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
