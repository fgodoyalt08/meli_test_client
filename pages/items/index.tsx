import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from 'styles/items.module.scss';
import Search from 'components/search';
import Breadcrumb from 'components/breadcrumb';
import Card from 'components/card';
import { useRouter } from 'next/router';
import { searchQuery } from 'hooks/searchQuery';
import { searchByTerm } from 'actions/items';
import { AxiosResponse } from 'axios';
import { IRequestItems } from 'types/IRequestItems';
import { IItem } from 'types/IItem';

const Items: NextPage = () => {

  const router = useRouter();
  const [search] = searchQuery();
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [keywords, setKeywords] = useState('');

  useEffect(()=>{

    if(!search.trim()){
      return;
    }

    setItems([]);

    searchByTerm(search).then((resp: AxiosResponse<IRequestItems[]> )=>{
      setKeywords(resp.data.categories.map((category:any)=> category.name).join(','));
      setCategories(resp.data.categories.slice(-5));
      setItems(resp.data.items);
      console.warn(resp.data.categories)
    }).catch((e)=>{
      console.error(e);
    })
  }, [setItems, search]);

  

  const goToDetail = ({id}) => router.push(`/items/${id}`);

  return (
    <div>
      <Head>
        <title>Resultados de busqueda</title>
        <meta name="description" content="Meli test" />
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={keywords}/>
        <meta httpEquiv="expires" content="60"/>
      </Head>
      <Search />
      <Breadcrumb items={categories} />
      <main className={styles.main}>
        {items.map((item: IItem)=>(
          <Card 
            key={item.id}
            item={item}
            onClick={() => goToDetail(item)}
          />
        ))}
      </main>
    </div>
  )
}

export default Items
