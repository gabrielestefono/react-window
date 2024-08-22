import { createContext } from 'react'

export const VirtualTableContext = createContext<{
  top: number
  setTop: (top: number) => void
  header: React.ReactNode
  footer: React.ReactNode
}>({
  top: 0,
  setTop: () => {},
  header: null,
  footer: null,
})
