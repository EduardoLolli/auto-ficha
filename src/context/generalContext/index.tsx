import { createContext, useState, useMemo, useEffect } from "react";
import { IPersonagem } from "./interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

interface IAutoFichaContext {
  bodyItems: IPersonagem | null;
  setBodyItems: React.Dispatch<React.SetStateAction<IPersonagem | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AutoFichaContext = createContext({} as IAutoFichaContext);

export const AutoFichaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bodyItems, setBodyItems] = useState<IPersonagem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const URL = "http://af-laravel-api.test/api/user";
      try {
        const response = await axios.get(URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status !== 200) {
          throw new Error("Usuário não autenticado");
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    verifyToken();
    setLoading(false)
  }, []);

  const value: IAutoFichaContext = useMemo(
    () => ({
      bodyItems,
      setBodyItems,
      loading,
      setLoading,
    }),
    [bodyItems, loading]
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
