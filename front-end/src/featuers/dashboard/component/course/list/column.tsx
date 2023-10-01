import { ColumnDef } from '@tanstack/react-table';
import { ActionDropdown } from './action-dropdown';

import { Author } from '@/types';
import { Badge } from '@/components/ui';

export const courseColumns: ColumnDef<Author>[] = [
  {
    accessorKey: 'name',
    header: () => <p className="text-start">عنوان دوره</p>,
    cell: ({ row }) => <p className="whitespace-nowrap">{row.getValue('name')}</p>,
    id: 'name',
  },
  {
    accessorKey: 'author',
    header: () => <p className="text-start min-w-[140px]">نویسنده دوره</p>,
    cell: ({ row }) => <p className="whitespace-nowrap">{row.getValue('author')}</p>,
    id: 'author',
  },
  {
    accessorKey: 'tag',
    header: () => <p className="text-start">تگ ها</p>,
    cell: ({ row }) => (
      <div className="flex flex-row gap-2">
        {row.getValue<Array<string>>('tag').map((str, index) => {
          if (index > 2) {
            return null;
          }
          return (
            <Badge key={str} className="whitespace-nowrap" variant="secondary">
              {str}
            </Badge>
          );
        })}
      </div>
    ),
    id: 'tag',
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
