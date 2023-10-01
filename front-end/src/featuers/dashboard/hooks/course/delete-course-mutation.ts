import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { baseApi } from '@/lib';

import { Course } from '@/types';

const deleteCourse = async (id: string): Promise<AxiosResponse<Course>> => {
  const res = baseApi.delete(`/courses/${id}`);
  return res;
};

export const useDeleteCourseMutation = () => {
  const queryClient = useQueryClient();
  const res = useMutation({
    mutationFn: deleteCourse,
    mutationKey: ['courses'],
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
    },
  });

  return res;
};
