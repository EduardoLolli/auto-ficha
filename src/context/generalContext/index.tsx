import { createContext, useState, useMemo, useEffect } from "react";
import {  IPersonagem } from "./interface";
import axios from "axios";

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

  const handleGetCharacter = async (): Promise<void> => {
    const URL = "http://localhost:3000/data";
    try {
      const response = await axios.get(URL);
      setCharacter(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCharacter();
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
