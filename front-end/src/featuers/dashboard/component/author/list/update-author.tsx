import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { UpdateAuthorForm } from '@/components/form';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Author } from '@/types';
import { useUpdateAuthorMutation } from '@/featuers/dashboard/hooks';
import { TCreateAuthor } from '@/utils/validation';

type Props = {
  userId: string;
  closeDropDown: () => void;
};

export const UpdateAuthorModal = ({ userId, closeDropDown }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutateAsync } = useUpdateAuthorMutation();

  const queryClient = useQueryClient();

  const authors = queryClient.getQueryData(['authors']) as AxiosResponse<Author[]>;
  const currentAuthor = authors.data.find((author) => author._id === userId);

  const toggleModal = (newValue: boolean) => {
    if (!newValue) {
      closeDropDown();
    }
    setIsModalOpen(newValue);
  };

  const handleMutate = async (data: TCreateAuthor) => {
    await mutateAsync({ name: data.name, userId: userId });
    toggleModal(false);
  };

  return (
    <Fragment>
      <Dialog
        open={isModalOpen}
        onOpenChange={(value) => {
          if (!value) {
            closeDropDown();
          }
          toggleModal(value);
        }}
      >
        <DialogTrigger className="w-full h-full text-start">ویرایش</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ویرایش اطلاعات نویسنده</DialogTitle>
            <DialogDescription>اطلاعات جدید نویسنده را وارد کنید</DialogDescription>
          </DialogHeader>
          <UpdateAuthorForm
            handleMutate={handleMutate}
            toggleModal={toggleModal}
            defaultValues={currentAuthor as Author}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
