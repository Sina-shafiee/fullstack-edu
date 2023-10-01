import { baseApi } from '@/lib';
import { Author } from '@/types';
import { TUpdateCourse } from '@/utils/validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const updateAuthor = async (
  data: TUpdateCourse & { courseId: string }
): Promise<AxiosResponse<Author>> => {
  const { courseId, ...body } = data;
  const res = baseApi.put(`/courses/${courseId}`, body);
  return res;
};

export const useUpdateCourseMutation = () => {
  const queryClient = useQueryClient();
  const res = useMutation({
    mutationFn: updateAuthor,
    mutationKey: ['courses'],
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
    },
  });

  return res;
};
