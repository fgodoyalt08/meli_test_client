import type { NextPage } from 'next';
import Head from 'next/head';
import Search from 'components/search';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Meli test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
    </div>
  )
}

export default Home
