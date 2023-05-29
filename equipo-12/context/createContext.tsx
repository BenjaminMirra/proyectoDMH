import { createContext } from "react";
import useUser from "../hooks/useUser";
import useAccount from "../hooks/useAccount";
import { IAccount, IUser } from "../types";

type context = {
  userInfo: IUser,
  account: IAccount
}

const INITIAL_VALUE = {
  userInfo: {
    firstname: "",
    lastname: "",
    phone: "",
    dni: 0,
    email: "",
    password: "",
  },
  account: {
    alias: "",
    available_amount: "",
    cvu: "",
    id: 0,
    user_id: 0
  }
};

export const UserContext = createContext<context>(INITIAL_VALUE);

type Props = {
  children: React.ReactNode;
}

export const UserProvider = ({children}: Props) => {
  const [userInfo] = useUser();
  const [account] = useAccount();
  const data = {userInfo,account};
  
  return(
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};