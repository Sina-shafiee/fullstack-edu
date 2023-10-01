import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { baseApi } from '@/lib';
import { TCreateCourse } from '@/utils/validation';

import { Author } from '@/types';

const addCourse = async (data: TCreateCourse): Promise<AxiosResponse<Author>> => {
  const res = baseApi.post('/courses', data);

  return res;
};

export const useAddCourseMutation = () => {
  const queryClient = useQueryClient();
  const res = useMutation({
    mutationFn: addCourse,
    mutationKey: ['courses'],
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
    },
  });

  return res;
};
