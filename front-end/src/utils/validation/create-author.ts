import * as yup from 'yup';

export const createAuthorSchema = yup.object({
  name: yup.string().required('این فیلد ضروری میباشد'),
});

export type TCreateAuthor = yup.InferType<typeof createAuthorSchema>;
