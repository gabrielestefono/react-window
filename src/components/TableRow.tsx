import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { ListChildComponentProps } from 'react-window'

interface RowProps extends ListChildComponentProps {
  index: number
}

export default function Row({ index, style }: Readonly<RowProps>) {
  return (
    <TableRow>
      <TableCell>Row {index}</TableCell>
      <TableCell>Col 2</TableCell>
      <TableCell>Col 3</TableCell>
      <TableCell>Col 4</TableCell>
    </TableRow>
  )
}
