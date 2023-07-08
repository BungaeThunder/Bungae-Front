import type { AppProps } from 'next/app';
import { GlobalStyles } from 'public/styles/GlobalStyles';
import theme from 'public/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxProvider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}

export default MyApp;
