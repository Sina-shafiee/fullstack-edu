import { ColumnDef } from '@tanstack/react-table';
import { ActionDropdown } from './action-dropdown';

import { Author } from '@/types';

export const authorColumns: ColumnDef<Author>[] = [
  {
    accessorKey: 'name',
    header: () => <p className="text-start">نام و نام خانواده گی</p>,
    cell: ({ row }) => <p className="">{row.getValue('name')}</p>,
    id: 'name',
  },
  {
    accessorKey: '_id',
    id: '_id',
    header() {
      return <p className="w-24 text-start block ms-auto">عملیات</p>;
    },
    cell({ row }) {
      return <ActionDropdown userId={row.getValue('_id')} />;
    },
  },
];
