import { Fragment } from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useCoursesQuery } from '@/featuers/dashboard/hooks';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

import { courseColumns } from './column';
import { Loader2 } from 'lucide-react';
import { TableTopBar } from './table-topbar';

type Props = {
  toggleCreateModal: (value: boolean) => void;
};

export const CourseDataTable = ({ toggleCreateModal }: Props) => {
  const { data: queryResult, isLoading } = useCoursesQuery();

  const table = useReactTable({
    data: queryResult?.data ?? [],
    columns: courseColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Fragment>
      <TableTopBar toggleCreateModal={toggleCreateModal} />
      <div className="rounded-sm overflow-hidden shadow-sm border mb-14 relative">
        <Table className="relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : !isLoading && !table.getRowModel().rows?.length ? (
              <TableRow>
                <TableCell
                  colSpan={courseColumns.length}
                  className="h-[520px] hover:bg-background text-center"
                >
                  نتیجه ای پیدا نشد...
                </TableCell>
              </TableRow>
            ) : null}
            {table.getRowModel().rows?.length >= 1 &&
            table.getRowModel().rows?.length < 5 ? (
              <TableRow className="hover:bg-background">
                <TableCell
                  colSpan={courseColumns.length}
                  className="h-[300px] text-center"
                ></TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
        {isLoading ? (
          <Fragment>
            <span className="h-full z-10 flex items-center justify-center w-full absolute top-0 left-0 bg-background/80 backdrop-blur-sm">
              <Loader2 className="h-8 w-8 animate-spin" />
            </span>
            {!table.getRowModel().rows.length ? (
              <div className="h-[360px] text-center" />
            ) : null}
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  );
};
