import React , { createContext, useContext, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({children}) =>{

    const [cardInfo, setCardInfo] = useState()
    const [homePageValue, setHomePageValue] = useState(true)



    return (
        <StateContext.Provider
            value={{
                cardInfo,
                setCardInfo,
                homePageValue,
                setHomePageValue
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const UseStateContext = ()=> useContext(StateContext)