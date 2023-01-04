import React, { useContext, useState, useEffect } from 'react'
import { AddNewSpending, GetAllTransactions } from '../db/TransactionsCRUDAPIs'

const TransactionContext = React.createContext()

export const TransactionConsumer = () => {
  return useContext(TransactionContext)
}

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([])

  const addNewTransaction = async (newSpending) => {
    if (await AddNewSpending(newSpending))
      setTransactions((arr) => [...arr, newSpending])
  }

  const setInitialTransaction = async () => {
    var allTransactions = await GetAllTransactions()
    setTransactions(allTransactions)
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, addNewTransaction, setInitialTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
