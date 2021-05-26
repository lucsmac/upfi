import { Button, Box } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import Head from 'next/head';
import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

type IInfiniteQueryResponse = {
  after: number | null;
  data: Card[];
};

export default function Home(): JSX.Element {
  const fetchProjects = async ({ pageParam = 0 }): Promise<unknown> => {
    const { data } = await api.get(`/images?after=${pageParam}`);
    return data;
  };

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<unknown, unknown, IInfiniteQueryResponse>(
    'images',
    fetchProjects,
    {
      getNextPageParam: (lastPage: { after: number }) => {
        return lastPage.after;
      },
    }
  );

  const formattedData = useMemo(() => {
    const imgsData = data?.pages.map(page => page.data).flat();
    return imgsData;
  }, [data]);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <>
      <Head>
        <title>UpFi</title>
      </Head>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button mt={8} onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? 'Carregando' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}
