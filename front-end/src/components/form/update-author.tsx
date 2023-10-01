import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TUpdateAuthor, updateAuthorSchema } from '@/utils/validation';
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
import { Author } from '@/types';
import { useRef } from 'react';

type Props = {
  handleMutate: (d: TUpdateAuthor) => void;
  toggleModal: (d: boolean) => void;
  defaultValues: Author;
};

export const UpdateAuthorForm = ({ handleMutate, toggleModal, defaultValues }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<TUpdateAuthor>({
    resolver: yupResolver(updateAuthorSchema),
    defaultValues: {
      name: defaultValues.name,
    },
  });
  const onSubmit = (data: TUpdateAuthor) => {
    handleMutate(data);
  };
  return (
    <Form {...form}>
      <form
        ref={formRef}
        id="update_author"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام و نام خانواده گی</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  onKeyUpCapture={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="flex gap-2">
          <Button
            form="update_author"
            onClick={() => {
              if (formRef.current) {
                formRef.current.dispatchEvent(new Event('submit', { bubbles: true }));
              }
            }}
            type="submit"
          >
            تایید و ثبت
          </Button>
          <Button onClick={() => toggleModal(false)} variant="ghost" type="button">
            بستن پنجره
          </Button>
        </section>
      </form>
    </Form>
  );
};
