import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Template Typescript</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
