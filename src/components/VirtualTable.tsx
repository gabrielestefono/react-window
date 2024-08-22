import React, { useRef, useState, useMemo } from 'react'
import { FixedSizeList, FixedSizeListProps } from 'react-window'
import { VirtualTableContext } from '../context/VirtualTableContext'
import Row from './TableRow'
import { InnerComponent } from './InnerComponent'

export function VirtualTable({
  row,
  header,
  footer,
  ...rest
}: {
  header?: React.ReactNode
  footer?: React.ReactNode
  row: FixedSizeListProps['children']
} & Omit<FixedSizeListProps, 'children' | 'innerElementType'>) {
  const listRef = useRef<FixedSizeList | null>(null)
  const [top, setTop] = useState(0)

  const contextValue = useMemo(
    () => ({
      top,
      setTop,
      header,
      footer,
    }),
    [top, setTop, header, footer]
  )

  return (
    <VirtualTableContext.Provider value={contextValue}>
      <FixedSizeList
        {...rest}
        innerElementType={InnerComponent}
        onItemsRendered={(props) => {
          // @ts-ignore private method access
          const style = listRef.current?._getItemStyle(props.overscanStartIndex)
          setTop(style?.top || 0)

          rest.onItemsRendered?.(props)
        }}
        ref={listRef}
      >
        {Row}
      </FixedSizeList>
    </VirtualTableContext.Provider>
  )
}
