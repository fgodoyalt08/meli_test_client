import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const searchQuery = () => {

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const searchQuery: string = (router.query.search || '') as string;

    setSearchQuery(searchQuery ? decodeURI(searchQuery) : '');
  }, [router]);

  const searchQuerySetter = (newValue: string) => setSearchQuery(newValue);

  return [searchQuery, searchQuerySetter] as const;
}