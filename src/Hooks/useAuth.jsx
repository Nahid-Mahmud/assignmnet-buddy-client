import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";

export const useAuth = () => {
  const authValue = useContext(AuthContext);
  return authValue;
};
