import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { baseApi } from '@/lib';
import { Course } from '@/types';

const getAuthors = async (): Promise<AxiosResponse<Array<Course>>> => {
  const res = await baseApi.get('/courses');
  return res;
};

export const useCoursesQuery = () => {
  const res = useQuery({
    queryFn: () => getAuthors(),
    queryKey: ['courses'],
  });

  return res;
};
