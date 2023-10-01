import { useQuery } from '@tanstack/react-query';

import { baseApi } from '@/lib';
import { Author } from '@/types';
import { AxiosResponse } from 'axios';

const getAuthors = async (): Promise<AxiosResponse<Array<Author>>> => {
  const res = await baseApi.get('/author');
  return res;
};

export const useAuthorsQuery = () => {
  const res = useQuery({
    queryFn: () => getAuthors(),
    queryKey: ['authors'],
  });

  return res;
};
