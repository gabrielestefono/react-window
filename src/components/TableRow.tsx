import React from 'react'
import { ListChildComponentProps } from 'react-window'

interface RowProps extends ListChildComponentProps {
  index: number
}

export default function Row({ index, style }: Readonly<RowProps>) {
  return (
    <tr>
      <td style={{ height: '36px' }}>Row {index}</td>
      <td>Col 2</td>
      <td>Col 3</td>
      <td>Col 4</td>
    </tr>
  )
}
