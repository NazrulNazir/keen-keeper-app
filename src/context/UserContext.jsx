import React, { createContext, useState } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext()
const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [count, setCount] = useState({});

    const userFun = async(usersData) => {
        await setUserData([...userData, usersData]);
    }

    const communicationCountFun = (communication)=> {
        setCount(communication);
    }

    const allData = { userData, userFun, communicationCountFun, count };



    return (
        <UserContext.Provider value={{ allData }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
