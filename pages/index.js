import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vostola</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <iframe
        src="/index.html"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        title="Vostola Site"
        allowFullScreen
      />
    </>
  );
}