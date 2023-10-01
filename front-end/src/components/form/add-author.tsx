import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TCreateAuthor, createAuthorSchema } from '@/utils/validation';
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

type Props = {
  handleMutate: (d: TCreateAuthor) => void;
  toggleModal: (d: boolean) => void;
};

export const AddAuthorForm = ({ handleMutate, toggleModal }: Props) => {
  const form = useForm<TCreateAuthor>({
    resolver: yupResolver(createAuthorSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (data: TCreateAuthor) => {
    handleMutate(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام و نام خانواده گی</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="flex gap-2">
          <Button type="submit">تایید و ثبت</Button>
          <Button onClick={() => toggleModal(false)} variant="ghost" type="button">
            بستن پنجره
          </Button>
        </section>
      </form>
    </Form>
  );
};
