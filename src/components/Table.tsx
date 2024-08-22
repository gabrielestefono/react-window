// src/components/Table.js
import React from 'react'
import Row from './TableRow'
import { VirtualTable } from './VirtualTable'

export default function Table() {
  return (
    <VirtualTable
      height={300}
      width="100%"
      itemCount={1000}
      itemSize={36}
      header={
        <thead>
          <tr>
            <th>Index</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
          </tr>
        </thead>
      }
      row={Row}
      footer={
        <tfoot>
          <tr>
            <td>Footer 1</td>
            <td>Footer 2</td>
            <td>Footer 3</td>
            <td>Footer 4</td>
          </tr>
        </tfoot>
      }
    />
  )
}
