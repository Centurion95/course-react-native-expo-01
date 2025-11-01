import { useState } from "react"

export const useCounter = () => {
  const [count, setCount] = useState<number>(10)
  const increaseBy = (value: number) => {
    // setCount(count + value)
    setCount(Math.max(count + value, 0)) //para que no baje menos que 0
  }

  return {
    //Properties
    count,

    //Actions
    increaseBy,
  }
}
