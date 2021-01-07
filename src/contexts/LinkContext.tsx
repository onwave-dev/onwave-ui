import React, { useContext } from "react";

export type LinkState = {
  type: "React" | "Next" | null;
};

const LinkContext = React.createContext<LinkState>({
  type: null,
});

export const useLinkContext = () => useContext(LinkContext);

export const LinkProvider: React.FC<LinkState> = ({ children, type }) => {
  return (
    <LinkContext.Provider
      value={{
        type,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
