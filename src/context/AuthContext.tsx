import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react"

enum AuthStatus {
  checking = 'checking',
  authenticated = 'authenticated',
  not_authenticated = 'not_authenticated',
}

interface AuthState {
  status: AuthStatus;
  token?: string;

  user?: User;

  //Getters
  isChecking: boolean;
  isAuthenticated: boolean;

  //Methods
  loginWithEmailAndPassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      console.log('Simulando petición de autenticación');
      setStatus(AuthStatus.not_authenticated);
    }, 1500)
  }, [])

  const loginWithEmailAndPassword = (email: string, password: string) => {
    setUser({
      name: 'Rodrigo Centurión',
      email,
    });
    setStatus(AuthStatus.authenticated);
  }

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.not_authenticated);
  }

  return (
    <AuthContext.Provider value={{
      status,
      user,

      //Getters
      isChecking: status === AuthStatus.checking,
      isAuthenticated: status === AuthStatus.authenticated,

      //Methods
      loginWithEmailAndPassword,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}