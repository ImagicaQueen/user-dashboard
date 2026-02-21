import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const API = "https://jsonplaceholder.typicode.com/users";

    const fetchUser = async() =>{
        try{
         const response = await axios.get(API);
         console.log('response',response)
         setUsers(response.data)
        }
        catch(error){
           return error
        }
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return (
        <UserContext.Provider value={{fetchUser,users}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=>useContext(UserContext)