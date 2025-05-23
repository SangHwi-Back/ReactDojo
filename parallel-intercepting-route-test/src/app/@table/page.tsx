'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'
import { useState } from 'react'
import { rows, Row } from "@/app/(store)/rows";

export default function Page() {
  const [filtering, setFiltering] = useState('');

  const columnHelper = createColumnHelper<Row>()

  const columns = [
    columnHelper.accessor('title', {
      cell: info => info.getValue(),
      header: '제목',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('likes', {
      cell: info => info.getValue(),
      header: '좋아요',
    }),
    columnHelper.accessor('author', {
      cell: info => info.getValue(),
      header: '작성자',
    }),
    columnHelper.accessor('category', {
      cell: info => info.getValue(),
      header: '카테고리',
    }),
    columnHelper.accessor('comments', {
      cell: info => info.getValue().length,
      header: '댓글 수',
    }),
  ];

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableSorting: true,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="flex flex-col h-full">
      <input
        value={filtering}
        onChange={e => setFiltering(e.target.value)}
        placeholder="검색..."
        className="p-2 border rounded"
      />
      <div className="flex-1 overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="sticky top-0 bg-white">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className={`hover:bg-gray-100`}>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
