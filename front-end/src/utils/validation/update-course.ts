import * as yup from 'yup';

export const updateCourseSchema = yup.object({
  name: yup.string().required('این فیلد ضروری میباشد'),
  tag: yup.array().test({
    message: 'حداقل یک مورد را انتخاب کنید.',
    test: (value) => {
      if (value?.length) {
        return true;
      }
    },
  }),
  author: yup.string().required('این فیلد ضروری میباشد'),
});

export type TUpdateCourse = yup.InferType<typeof updateCourseSchema>;
