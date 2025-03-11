import { createContext, useState, useMemo, useEffect } from "react";
import { IPersonagem } from "./interface";
import dadosPersonagem from "../../dados/personagem.json"


interface IAutoFichaContext {
    character: IPersonagem;
    setCharacter: React.Dispatch<React.SetStateAction<IPersonagem>>;
}
export const AutoFichaContext = createContext({} as { character: IPersonagem; setCharacter: React.Dispatch<React.SetStateAction<IPersonagem>> });

export const AutoFichaProvider = ({ children, }: { children: React.ReactNode; }) => {


    
    const [character, setCharacter] = useState<IPersonagem>({} as IPersonagem);

    useEffect(() => {
        setCharacter(dadosPersonagem as IPersonagem);
    }
        , [character]);

    const value: IAutoFichaContext = useMemo(
        () => ({ character, setCharacter }),
        [character,]
    );
    return (
        <AutoFichaContext.Provider value={value}>
            {children}
        </AutoFichaContext.Provider>
    );
};
