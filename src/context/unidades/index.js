import { createContext,useState} from "react";
export const UnidadesContext = createContext([]);
export function LoginProvider({children}){
    const [unidades, setUnidades] = useState([]);
    function handleAddUnidade(unidades) {
        setUnidades(unidades);
        toast.success('Unidade Adicionada')
    }    
    return (
        <UnidadesContext.Provider
            value={{
                unidades: unidades,
                addUnidade: handleAddUnidade
            }}>
            {children}
        </UnidadesContext.Provider>
    )

}