import { baseApi } from '@/lib';
import { Author } from '@/types';
import { TUpdateAuthor } from '@/utils/validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const updateAuthor = async (
  data: TUpdateAuthor & { userId: string }
): Promise<AxiosResponse<Author>> => {
  const res = baseApi.put(`/author/${data.userId}`, { name: data.name });
  return res;
};

export const useUpdateAuthorMutation = () => {
  const queryClient = useQueryClient();
  const res = useMutation({
    mutationFn: updateAuthor,
    mutationKey: ['authors'],
    onSuccess: () => {
      queryClient.invalidateQueries(['authors']);
    },
  });

  return res;
};
