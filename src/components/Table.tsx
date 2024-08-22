// src/components/Table.js
import React from 'react'
import Row from './TableRow'
import { VirtualTable } from './VirtualTable'
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

export default function Table() {
  return (
    <VirtualTable
      height={300}
      width="100%"
      itemCount={1000}
      itemSize={36}
      header={
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 4</TableCell>
          </TableRow>
        </TableHead>
      }
      row={Row}
      footer={
        <TableBody>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
            <TableCell>Footer 3</TableCell>
            <TableCell>Footer 4</TableCell>
          </TableRow>
        </TableBody>
      }
    />
  )
}
