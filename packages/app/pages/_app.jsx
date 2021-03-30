import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <script src="/wasm_exec.js" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
