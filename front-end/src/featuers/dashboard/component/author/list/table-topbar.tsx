import { Button, Input } from '@/components/ui';
import { Plus, Search } from 'lucide-react';

type Props = {
  toggleCreateModal: (value: boolean) => void;
};

export const TableTopBar = ({ toggleCreateModal }: Props) => {
  return (
    <section className="flex my-4 items-center justify-between">
      <div className="w-full max-w-xs relative h-11">
        <Input className="w-full absolute top-0 left-0" placeholder="جستجوی نویسنده..." />
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
      </div>
      <Button variant="secondary" onClick={() => toggleCreateModal(true)}>
        <Plus className="h-4 w-4 me-2 dark:text-white" />
        افزودن نویسنده
      </Button>
    </section>
  );
};
