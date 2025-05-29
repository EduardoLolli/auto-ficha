import { createContext, useState, useMemo, useEffect } from "react";
import { IPersonagem } from "./interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IAutoFichaContext {
  character: IPersonagem | null;
  setCharacter: React.Dispatch<React.SetStateAction<IPersonagem | null>>;
  loading: boolean;
}

export const AutoFichaContext = createContext({} as IAutoFichaContext);

export const AutoFichaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [character, setCharacter] = useState<IPersonagem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const URL = "http://af-laravel-api.test/api/me";
      try {
        const response = await axios.get(URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/login");
    }
    console.log("não existe");
  };

  const handleGetCharacter = async (): Promise<void> => {
    const URL = "http://localhost:3000/data";
    try {
      const response = await axios.get(URL);
      setCharacter(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCharacter();
    verifyToken();
  }, []);

  const value: IAutoFichaContext = useMemo(
    () => ({
      character,
      setCharacter,
      loading,
    }),
    [character, loading]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AutoFichaContext.Provider value={value}>
      {children}
    </AutoFichaContext.Provider>
  );
};
