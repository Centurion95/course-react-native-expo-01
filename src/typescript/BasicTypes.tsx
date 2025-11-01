export const BasicTypes = () => {
  const name: string = 'Rodrigo'
  const age: number = 30
  const isActive: boolean = true

  const powers: string[] = ['Velocidad', 'Volar', 'Fuerza']

  return (
    <>
      <h3>Tipos basicos</h3>
      {name} - {age} - {isActive ? 'Activo' : 'Inactivo'}
      <p>{powers.join(', ')}</p>
    </>
  )
}
