import React, { createContext, useState } from 'react';

interface AppContextType {
  cookie: string | null;
  setCookie: React.Dispatch<React.SetStateAction<string | null>>;
  user: string | null | any;
  setUser: React.Dispatch<React.SetStateAction<string | null | any>>;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode}) => {
  const [cookie, setCookie] = useState<string | null>(null);
  const [user, setUser] = useState<string | null | any>(null);

  return <AppContext.Provider value={{cookie, setCookie, user, setUser}}>
            {children}
        </AppContext.Provider>;
};