import { createContext,useState} from "react";
export const LoginContext = createContext();
export function LoginProvider({children}){
    const [username, setloginname] = useState('');
    function handleAddLoginName(username) {
        setloginname(username);
    }    
    return (
        <LoginContext.Provider
            value={{
                username: username,
                addName: handleAddLoginName
            }}>
            {children}
        </LoginContext.Provider>
    )

}