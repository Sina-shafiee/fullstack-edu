import { baseApi } from '@/lib';
import { Author } from '@/types';
import { TCreateAuthor } from '@/utils/validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const addAuthor = async (data: TCreateAuthor): Promise<AxiosResponse<Author>> => {
  const res = baseApi.post('/author', data);

  return res;
};

export const useAddAuthorMutation = () => {
  const queryClient = useQueryClient();
  const res = useMutation({
    mutationFn: addAuthor,
    mutationKey: ['authors'],
    onSuccess: () => {
      queryClient.invalidateQueries(['authors']);
    },
  });

  return res;
};
