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
import { useState } from 'react';
import { DeleteCourseModal } from './delete-course';
import { UpdateCourseModal } from './update-course';

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
          <UpdateCourseModal
            courseId={userId}
            closeDropDown={() => setIsOpenDropDown(false)}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => e.preventDefault()}>
          <DeleteCourseModal
            userId={userId}
            closeDropDown={() => setIsOpenDropDown(false)}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
