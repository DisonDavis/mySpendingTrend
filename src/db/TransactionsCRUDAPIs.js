import { useState } from 'react'
import { db } from '../db/Firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { async } from 'q'
export const AddNewSpending = async (newSpending) => {
  try {
    await addDoc(collection(db, 'transactions'), newSpending)
  } catch (err) {
    return false
  }
  return true
}

export const GetAllTransactions = async () => {
  const allTransactions = await getDocs(collection(db, 'transactions'))
  const data = []
  console.log('reading all data')
  allTransactions.docs.map((doc) => {
    data.push(doc.data())
  })
  return data
}
