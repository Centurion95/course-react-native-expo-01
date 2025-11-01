interface Person {
  age: number
  firstName: string
  lastName: string
  address: Address
}

interface Address {
  country: string
  houseNo: number
  street?: string
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 30,
    firstName: 'Rodrigo',
    lastName: 'Centurión',
    address: {
      country: 'Paraguay',
      houseNo: 123,
      street: 'Calle falsa 123',
    },
  }

  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  )
}
