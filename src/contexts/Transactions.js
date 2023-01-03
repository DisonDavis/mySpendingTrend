import React, { useContext, useState } from "react"

const TransactionContext = React.createContext()


export const TransactionConsumer = () => {
    return useContext(TransactionContext)
}

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])

    const addNewTransaction = (newSpending) => {
        setTransactions(arr => [...arr, newSpending])
      
    }

    return (
        <TransactionContext.Provider value={{ transactions, addNewTransaction }}>

            {children}

        </TransactionContext.Provider>
    )
} 