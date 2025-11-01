import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

  const { isChecking, isAuthenticated, loginWithEmailAndPassword, user, logout } = useAuthContext()

  if (isChecking) {
    return <span>Checking authentication...</span>
  }

  return (
    <>
      {isAuthenticated ?
        (
          <>
            <h3>Bienvenido usuario</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>

            <button
              onClick={() => logout()}
              className="bg-blue-500 p-2 text-white rounded-xl mt-2">
              Logout
            </button>
          </>
        )
        :
        (
          <>
            <h3>Ingresar a la aplicación</h3>
            <button
              onClick={() => loginWithEmailAndPassword('example@hotmail.com', 'qwerty123456')}
              className="bg-blue-500 p-2 text-white rounded-xl mt-2">
              Ingresar
            </button>
          </>
        )
      }
    </>
  )
}
