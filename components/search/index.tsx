import React from 'react';
import Image from 'next/image';
import Style from './index.module.scss';
import { useRouter } from 'next/router';
import { searchQuery } from 'hooks/searchQuery';

const logoUrl: string = '/assets/Logo_ML.png';
const searchIconUrl: string = '/assets/ic_Search@2x.png.png.png';
const inputPlaceHolder: string = 'Nunca dejes de buscar';


const Search = () => {
  const router = useRouter();
  const formRef = React.createRef<HTMLFormElement>();
  const [search, setSearchQuery] = searchQuery();

  const searchHandle = (e: React.FormEvent) => {

    e.preventDefault();

    if (!validateSearch()) {
      return;
    }

    router.push({
      pathname: '/items',
      query: {
        search: encodeURI(search as string)
      }
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const onImageClick = () => router.push('/');

  const validateSearch = () => !!search?.trim();

  const submitForm = () => formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));

  return (
    <header className={Style.search}>
      <div className={Style.logoContainer}>
        <Image onClick={onImageClick} className={Style.logo} src={logoUrl} width={53} height={36} alt='ML Logo' />
      </div>
      <div className={Style.searchContainer}>
        <form
          onSubmit={searchHandle}
          ref={formRef}
        >
          <input defaultValue={search as string} className={Style.input} onChange={onInputChange} placeholder={inputPlaceHolder} />
          <div onClick={submitForm} className={Style.icoContainer}>
            <Image src={searchIconUrl} width={18} height={18} alt='ML Logo' />
          </div>
        </form>
      </div>
    </header>
  );
}

export default Search;
