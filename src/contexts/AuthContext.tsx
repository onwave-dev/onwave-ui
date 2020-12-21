import { NextPage } from "next";
import React, { useCallback, useContext, useEffect, useState } from "react";

export type AuthState = {
  token: string | undefined;
  refreshToken: string | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  setLoggedIn: (token: string, refreshToken: string) => void;
  setLoggedOut: () => void;
};

const AuthContext = React.createContext<AuthState>({
  token: undefined,
  refreshToken: undefined,
  isLoading: true,
  isLoggedIn: false,
  setLoggedIn: () => {},
  setLoggedOut: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: NextPage<{
  tokenName: string;
  getToken: (refreshToken: string) => string;
}> = ({ children, tokenName, getToken }) => {
  const [token, setToken] = useState<string | undefined>();
  const [refreshToken, setRefreshToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setLoggedIn = useCallback((token: string, refreshToken: string) => {
    localStorage.setItem(tokenName, refreshToken);
    setToken(token);
    setRefreshToken(refreshToken);
  }, []);

  const setLoggedOut = useCallback(() => {
    localStorage.removeItem(tokenName);
    setToken(undefined);
    setRefreshToken(undefined);
  }, []);

  useEffect(() => {
    const localRefreshToken = localStorage.getItem(tokenName);
    if (localRefreshToken) {
      setRefreshToken(localRefreshToken);
      const token = getToken(localRefreshToken);
      setToken(token);
    }

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        refreshToken,
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
