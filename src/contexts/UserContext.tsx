import { NextPage } from "next";
import React, {
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "./AuthContext";

export type UserState = {
  user: any;
  setUserLoggedIn: Dispatch<any>;
  setUserLoggedOut: Dispatch<void>;
};

const UserContext = React.createContext<UserState>({
  user: undefined,
  setUserLoggedIn: () => {},
  setUserLoggedOut: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider: NextPage = ({ children }) => {
  const [user, setUser] = useState<any | undefined>();
  const { isLoggedIn, token } = useAuthContext();

  const setUserLoggedIn = useCallback((user: any) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }, []);
  const setUserLoggedOut = useCallback(() => {
    localStorage.removeItem("user");
    setUser(undefined);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUserLoggedIn,
        setUserLoggedOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
