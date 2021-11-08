import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from 'styles/item.detail.module.scss';
import Search from 'components/search';
import Breadcrumb from 'components/breadcrumb';

const Skeleton: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Meli test</title>
        <meta name="description" content="Meli test" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content='keywords' />
        <meta httpEquiv="expires" content="60" />
      </Head>
      <Search />
      <Breadcrumb />
      <main className={styles.main}>
      </main>
    </div>
  )
}

export default Skeleton
