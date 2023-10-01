import { Fragment, useState } from 'react';
import { useDeleteCourseMutation } from '@/featuers/dashboard/hooks';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';

type Props = {
  userId: string;
  closeDropDown: () => void;
};

export const DeleteCourseModal = ({ userId, closeDropDown }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (newValue: boolean) => {
    if (!newValue) {
      closeDropDown();
    }
    setIsModalOpen(newValue);
  };

  const { mutateAsync } = useDeleteCourseMutation();

  const handleDeleteCourse = async () => {
    await mutateAsync(userId);
    toggleModal(false);
  };

  return (
    <Fragment>
      <Dialog
        modal
        open={isModalOpen}
        onOpenChange={(value) => {
          if (!value) {
            closeDropDown();
          }
          toggleModal(value);
        }}
      >
        <DialogTrigger className="w-full h-full text-start">حذف</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>آیا مطمینید میخواهید دوره را حذف کنید؟</DialogTitle>
            <DialogDescription>
              امکان بازگردانی اطلاعات حذف شده وجود ندارد در صورت اطمینان روی تایید و یا
              لغو و بستن پنجره کلیک کنید
            </DialogDescription>
          </DialogHeader>

          <section className="flex gap-2 items-center pt-4">
            <Button onClick={() => handleDeleteCourse()} variant="destructive">
              تایید
            </Button>
            <Button variant="ghost" onClick={() => toggleModal(false)}>
              لغو و بستن
            </Button>
          </section>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
