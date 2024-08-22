import React, { forwardRef, useContext } from 'react'

import { VirtualTableContext } from '../context/VirtualTableContext'
import { Table, TableBody } from '@material-ui/core'

export const InnerComponent = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function Inner({ children, ...rest }, ref) {
  const { header, footer, top } = useContext(VirtualTableContext)
  return (
    <div {...rest} ref={ref}>
      <Table style={{ top, position: 'absolute', width: '100%' }}>
        {header}
        <TableBody>{children}</TableBody>
        {footer}
      </Table>
    </div>
  )
})
