import { enableStaticRendering } from 'mobx-react';
import type { AppProps } from 'next/app';
import GlobalFonts from 'public/fonts/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  enableStaticRendering(typeof window === 'undefined');
  return (
    <>
      <GlobalFonts />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
