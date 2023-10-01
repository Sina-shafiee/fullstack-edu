import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { baseApi } from '@/lib';

import { Author } from '@/types';

const deleteUser = async (id: string): Promise<AxiosResponse<Author>> => {
  const res = baseApi.delete(`/author/${id}`);
  return res;
};

export const useDeleteAuthorMutation = () => {
  const queryClient = useQueryClient();
  const res = useMutation({
    mutationFn: deleteUser,
    mutationKey: ['authors'],
    onSuccess: () => {
      queryClient.invalidateQueries(['authors']);
    },
  });

  return res;
};
