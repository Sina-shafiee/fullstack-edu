import { AddAuthorForm } from '@/components/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { useAddAuthorMutation } from '@/featuers/dashboard/hooks';
import { TCreateAuthor } from '@/utils/validation';

type Props = {
  showModal: boolean;
  toggleModal: (val: boolean) => void;
};
export const AddAuthorModal = ({ showModal, toggleModal }: Props) => {
  const { mutateAsync } = useAddAuthorMutation();
  const handleMutate = async (data: TCreateAuthor) => {
    await mutateAsync(data);
    toggleModal(false);
  };
  return (
    <Dialog open={showModal} onOpenChange={(value) => toggleModal(value)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ایجاد نویسنده جدید</DialogTitle>
          <DialogDescription>اطلاعات نویسنده جدید را وارد کنید</DialogDescription>
        </DialogHeader>
        <AddAuthorForm handleMutate={handleMutate} toggleModal={toggleModal} />
      </DialogContent>
    </Dialog>
  );
};
