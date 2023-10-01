import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TCreateCourse, createCourseSchema } from '@/utils/validation';
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
import { useMemo } from 'react';

type Props = {
  handleMutate: (d: TCreateCourse) => void;
  toggleModal: (d: boolean) => void;
};

export const AddCourseForm = ({ handleMutate, toggleModal }: Props) => {
  const { data, isLoading } = useAuthorsQuery();
  const form = useForm<TCreateCourse>({
    resolver: yupResolver(createCourseSchema),
    defaultValues: {
      name: '',
      author: '',
      tag: [],
    },
  });

  const onSubmit = (data: TCreateCourse) => {
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>تگ ها</FormLabel>
              <FormControl>
                <Select
                  isMulti
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
          )}
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
