import { AddCourseForm } from '@/components/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { useAddCourseMutation } from '@/featuers/dashboard/hooks';
import { TCreateCourse } from '@/utils/validation';

type Props = {
  showModal: boolean;
  toggleModal: (val: boolean) => void;
};
export const AddCourseModal = ({ showModal, toggleModal }: Props) => {
  const { mutateAsync } = useAddCourseMutation();
  const handleMutate = async (data: TCreateCourse) => {
    await mutateAsync(data);
    toggleModal(false);
  };
  return (
    <Dialog open={showModal} onOpenChange={(value) => toggleModal(value)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>اضافه کردن دوره جدید</DialogTitle>
          <DialogDescription>اطلاعات دوره جدید را وارد کنید</DialogDescription>
        </DialogHeader>
        <AddCourseForm handleMutate={handleMutate} toggleModal={toggleModal} />
      </DialogContent>
    </Dialog>
  );
};
