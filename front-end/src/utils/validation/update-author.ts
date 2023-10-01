import * as yup from 'yup';

export const updateAuthorSchema = yup.object({
  name: yup.string().required('این فیلد ضروری میباشد'),
});

export type TUpdateAuthor = yup.InferType<typeof updateAuthorSchema>;
