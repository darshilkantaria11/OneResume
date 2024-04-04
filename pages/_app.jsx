import Head from 'next/head';
import '/styles/globals.css'; // Your global stylesheet

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>OneResume</title>
        {/* Other default meta tags for SEO, etc. */}
      </Head>
      <Component {...pageProps} />
    </div>
  );
}