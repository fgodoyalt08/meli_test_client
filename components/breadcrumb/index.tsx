import React from 'react';
import Style from './index.module.scss';
import IBreadcrumbProps from './IBreadcrumbProps';
import { ICategory } from 'types/ICategory';

const Breadcrumb = ({ items }: IBreadcrumbProps) => {

  return <ul className={Style.breadcrumbList}>
    {Array.isArray(items) && items.map((item: ICategory, idx: number) => <li key={item.id}><a className={idx === items.length - 1 ? Style.lastElement : ''} href={`#${item.id}`}>{item.name}</a></li>)}
  </ul>;
}

export default Breadcrumb;
