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

export const AuthProvider: React.FC<{
  tokenName: string;
  tokenData?: string;
  tokenError?: any;
  getToken?: (refreshToken: string) => void;
}> = ({ children, tokenName, tokenData, tokenError, getToken }) => {
  const [token, setToken] = useState<string | undefined>();
  const [refreshToken, setRefreshToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setLoggedIn = useCallback((token: string, refreshToken: string) => {
    if (getToken) {
      localStorage.setItem(tokenName, refreshToken);
      setToken(token);
      setRefreshToken(refreshToken);
    } else {
      localStorage.setItem(tokenName, token);
      setToken(token);
    }
  }, []);

  const setLoggedOut = useCallback(() => {
    localStorage.removeItem(tokenName);
    setToken(undefined);
    setRefreshToken(undefined);
  }, []);

  useEffect(() => {
    if (getToken) {
      const localRefreshToken = localStorage.getItem(tokenName);
      if (localRefreshToken) {
        setRefreshToken(localRefreshToken);
        getToken(localRefreshToken);
      } else {
        setIsLoading(false);
      }
    } else {
      const localToken = localStorage.getItem(tokenName);
      if (localToken) {
        setToken(localToken);
      } else {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      setToken(tokenData);
      setIsLoading(false);
    }
  }, [tokenData]);

  useEffect(() => {
    if (tokenError) {
      setLoggedOut();
    }
  }, [tokenError]);

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
