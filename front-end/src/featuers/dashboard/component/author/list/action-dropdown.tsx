import { MoreHorizontal } from 'lucide-react';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';
import { DeleteAuthorModal } from './delete-author';
import { useState } from 'react';
import { UpdateAuthorModal } from './update-author';

type Props = {
  userId: string;
};

export const ActionDropdown = ({ userId }: Props) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  return (
    <DropdownMenu
      dir="rtl"
      modal
      open={isOpenDropDown}
      onOpenChange={(value) => setIsOpenDropDown(value)}
    >
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="ms-auto me-14 w-11 h-11 rounded-sm flex items-center justify-center"
        >
          <MoreHorizontal className="h-6 w-7" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>عملیات</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(e) => e.preventDefault()}>
          <UpdateAuthorModal
            userId={userId}
            closeDropDown={() => setIsOpenDropDown(false)}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => e.preventDefault()}>
          <DeleteAuthorModal
            userId={userId}
            closeDropDown={() => setIsOpenDropDown(false)}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
