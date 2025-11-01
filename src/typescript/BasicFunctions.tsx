// const addTwoNumbers = (a: number, b: number): number => {
//   return a + b
// }

//otro ejemplo, retornando un string
const addTwoNumbers = (a: number, b: number): string => {
  return `${a + b}`
}

export const BasicFunctions = () => {
  return (
    <>
      <h3>Funciones Básicas</h3>
      <p>La suma de 2 + 8 es: {addTwoNumbers(2, 8)}</p>
    </>
  )
}
