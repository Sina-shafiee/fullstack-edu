import { AxiosResponse } from 'axios';
import { Fragment, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { UpdateCourseForm } from '@/components/form';
import { useUpdateCourseMutation } from '@/featuers/dashboard/hooks';

import { TUpdateCourse } from '@/utils/validation';
import { Course } from '@/types';

type Props = {
  courseId: string;
  closeDropDown: () => void;
};

export const UpdateCourseModal = ({ courseId, closeDropDown }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutateAsync } = useUpdateCourseMutation();

  const queryClient = useQueryClient();

  const courses = queryClient.getQueryData(['courses']) as AxiosResponse<Course[]>;
  const currentCourse = courses.data.find((course) => course._id === courseId);

  const toggleModal = (newValue: boolean) => {
    if (!newValue) {
      closeDropDown();
    }
    setIsModalOpen(newValue);
  };

  const handleMutate = async (data: TUpdateCourse) => {
    await mutateAsync({ ...data, courseId });
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
          <UpdateCourseForm
            handleMutate={handleMutate}
            toggleModal={toggleModal}
            defaultValues={currentCourse as Course}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
