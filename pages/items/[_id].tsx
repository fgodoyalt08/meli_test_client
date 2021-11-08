import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from 'styles/item.detail.module.scss';
import Search from 'components/search';
import Breadcrumb from 'components/breadcrumb';
import Image from 'next/image';
import { getById } from 'actions/items';
import { useRouter } from 'next/router';
import { IRequestItem } from 'types/IRequestItem';
import { AxiosResponse } from 'axios';
import translate from 'helpers/translate';
import formatForMoney from 'helpers/formatForMoney';
import Skeleton from 'components/skeleton';


const Home: NextPage = () => {

  const router = useRouter();

  const [item, setItem] = useState<IRequestItem['item']>();

  useEffect(() => {
    if (!router.query._id) {
      return;
    }

    const itemId: string = router.query._id as string;

    getById(itemId).then((resp: AxiosResponse<IRequestItem>) => {
      setItem(resp.data.item as IRequestItem['item']);
    });

  }, [router]);

  if (!item) {
    return <Skeleton />
  }

  return (
    <div>
      <Head>
        <title>{item?.title}</title>
        <meta name="description" content={item?.description} />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="keywords" />
        <meta httpEquiv="expires" content="60" />
      </Head>
      <Search />
      <Breadcrumb items={[{id:item.id,name:item.title}]} />
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image className={styles.cardImage} src={item?.picture as string} width={680} height={680} alt={item?.title} />
        </div>
        <div className={styles.detailContainer}>
          <span className={styles.detailCondition}>{translate(item?.condition)} - {item?.sold_quantity} vendidos</span>
          <span className={styles.detailTitle}>{item?.title}</span>
          <span className={styles.detailPrice}>$ {formatForMoney(item?.price.amount as number)}</span>
          <button className={styles.detailButton}>Comprar</button>
        </div>
        <div className={styles.descriptionContainer}>
          <span className={styles.detailDescription}>Descripcion del producto</span>
          <span className={styles.detailDescriptionComplete}>
            <div dangerouslySetInnerHTML={{__html: (item?.description || '').replace(/(?:\r\n|\r|\n)/g, '<br>')}} />
          </span>
        </div>
      </main>
    </div>
  )
}

export default Home
