import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TUpdateCourse, updateCourseSchema } from '@/utils/validation';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '../ui';
import { Select } from '../ui/select';
import { useAuthorsQuery } from '@/featuers/dashboard/hooks';
import { Course } from '@/types';

type Props = {
  handleMutate: (d: TUpdateCourse) => void;
  toggleModal: (d: boolean) => void;
  defaultValues: Course;
};

export const UpdateCourseForm = ({ handleMutate, toggleModal, defaultValues }: Props) => {
  console.log({ defaultValues });
  const { data, isLoading } = useAuthorsQuery();
  const form = useForm<TUpdateCourse>({
    resolver: yupResolver(updateCourseSchema),
    defaultValues: {
      name: defaultValues.name,
      author: defaultValues.author,
      tag: defaultValues.tag,
    },
  });

  const onSubmit = (data: TUpdateCourse) => {
    handleMutate(data);
  };

  const authorOptions = useMemo(() => {
    return data?.data.map((author) => {
      return {
        label: author.name,
        value: author.name,
      };
    });
  }, [data]);

  const categoryOptions = useMemo(() => {
    return [
      {
        label: 'طراحی وب',
        value: 'طراحی وب',
      },
      {
        label: 'هک و امنیت',
        value: 'هک و امنیت',
      },
      {
        label: 'برنامه نویسی موبایل',
        value: 'برنامه نویسی موبایل',
      },
    ];
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام دوره</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نویسنده</FormLabel>
              <FormControl>
                <Select
                  isDisabled={isLoading}
                  defaultValue={authorOptions?.find((c) => c.value === field.value)}
                  _options={authorOptions ?? []}
                  onChange={(newValue) => {
                    const value = newValue as unknown as {
                      label: string;
                      value: string;
                    };

                    field.onChange(value.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => {
            const defaultValues = field.value?.map((v) => ({ label: v, value: v }));
            return (
              <FormItem>
                <FormLabel>تگ ها</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    defaultValue={defaultValues}
                    _options={categoryOptions}
                    onChange={(newValue) => {
                      const temp = newValue as unknown as {
                        label: string;
                        value: string;
                      }[];
                      const value = temp.map((value) => value.value);
                      if (value) {
                        field.onChange(value);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <section className="flex gap-2 pt-4">
          <Button type="submit">تایید و ثبت</Button>
          <Button onClick={() => toggleModal(false)} variant="ghost" type="button">
            بستن پنجره
          </Button>
        </section>
      </form>
    </Form>
  );
};
