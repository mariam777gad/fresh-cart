'use client'
import { createContext, useState } from "react"

export const countContext=createContext({ count: 1, setCount: (count:number) => {} })
export default function ProductDetailsWrapper({children}:{children:React.ReactNode}) {
     const [count, setCount] = useState<number>(1);
  return (
    <countContext.Provider value={{ count, setCount }}>
      {children}
    </countContext.Provider>
  )
}
