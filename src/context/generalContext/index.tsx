/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useMemo, useEffect } from "react";
import { IUserContext } from "./interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

interface IAutoFichaContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userContext: IUserContext;
  API_URL: string;
  logOutUser: () => void;
}

export const AutoFichaContext = createContext({} as IAutoFichaContext);

export const AutoFichaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState<boolean>(true);
  const [userContext, setUserContext] = useState<IUserContext>({} as IUserContext);
  const navigate = useNavigate();

  function logOutUser() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  function verifyTokenIsValid() {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get(`${API_URL}/api/auth`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        setUserContext(response.data.data);
      }).catch(() => {
        logOutUser();
      }).finally(() => {
        setLoading(false);
      });
    }
    else {
      logOutUser();
      setLoading(false);
    }

  }

  useEffect(() => {
    verifyTokenIsValid();
  }, []);

  useEffect(() => {
    if (Object.keys(userContext).length > 0) {
      setUserContext(userContext);
    }
  }, [userContext]);

  const value: IAutoFichaContext = useMemo(
    () => ({
      loading,
      setLoading,
      userContext,
      API_URL,
      logOutUser
    }),
    [
      loading,
      userContext,
      API_URL,
      logOutUser
    ]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <AutoFichaContext.Provider value={value}>
      {children}
    </AutoFichaContext.Provider>
  );
};
