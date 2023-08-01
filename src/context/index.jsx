import React, { createContext, useState } from 'react'

const Root = createContext()

export default function RootContext({children}) {
    const [data, setData] = useState('')
  return (
    <Root.Provider value={[data, setData]}>{children}</Root.Provider>
  )
}
