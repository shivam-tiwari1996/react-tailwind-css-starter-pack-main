import React, { useState,createContext } from 'react'

export const AppContext = createContext();

export default function AppContextProvider({children}){


    const headerData = ['Overview', 'Orders','Shipments','NDR','WhatsApp Comm','RTO','Courier','Delays','Tracing Page']
    const homeCardData = [
        {
        title:"Today's Order",
        day:'Yesterday',
        dayRs:0,
        volumeRs:0
    },
        {
        title:"Today's Revenue",
        day:'Yesterday',
        dayRs:10,
        volumeRs:0,
    },
        {
        title:"Average Shipping",
        day:'Yesterday',
        dayRs:0,
        volumeRs:9
    }
]

    const [handleHeader, sethandleHeader] = useState(0);



    const value = {
        headerData,
        homeCardData,
        handleHeader,
        sethandleHeader
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
