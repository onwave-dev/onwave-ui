import { NextPage } from "next";
import React, {
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type AuthState = {
  token: string | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  setLoggedIn: Dispatch<string>;
  setLoggedOut: Dispatch<void>;
};

const AuthContext = React.createContext<AuthState>({
  token: undefined,
  isLoading: true,
  isLoggedIn: false,
  setLoggedIn: () => {},
  setLoggedOut: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: NextPage<{ tokenName: string }> = ({
  children,
  tokenName,
}) => {
  const [token, setToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const setLoggedIn = useCallback((token: string) => {
    localStorage.setItem(tokenName, token);
    setToken(token);
  }, []);
  const setLoggedOut = useCallback(() => {
    localStorage.removeItem(tokenName);
    setToken(undefined);
  }, []);

  useEffect(() => {
    const localToken = localStorage.getItem(tokenName);
    if (localToken) {
      setLoggedIn(localToken);
    }
    setIsLoading(false);
  }, [setLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoading,
        isLoggedIn: Boolean(token),
        setLoggedOut,
        setLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const ProtectRoute: NextPage<{ LoginComponent: React.FC }> = ({
  children,
  LoginComponent,
}) => {
  const { isLoggedIn, isLoading } = useAuthContext();
  if (isLoading || (!isLoggedIn && window.location.pathname !== "/login")) {
    return <LoginComponent />;
  }
  return <>{children}</>;
};
