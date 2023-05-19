import { createContext, useContext, useState } from "react";
export interface ContextType {
  user: UserType;
  setUser: (user: { email: string; password: string }) => void;
}
interface UserType {
  email: string;
  password: string;
}
export const userContext = createContext<ContextType>({
  user: {
    email: "",
    password: "",
  },
  setUser: () => {
    return;
  },
});

export const useUserContext = (): ContextType => useContext(userContext);

const UseContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserType>({
    email: "",
    password: "",
  });
  const userContextValue: ContextType = {
    user,
    setUser,
  };

  return (
    <userContext.Provider value={userContextValue}>
      {children}
    </userContext.Provider>
  );
};

export default UseContextProvider;
