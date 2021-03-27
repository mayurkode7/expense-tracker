import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { actions } from '../config'


const initialState = {
    transactions: [
    ]
}

// init context 
export const GlobalContext = createContext(initialState)


// init provider

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: actions.DELETE_TRANSACTION,
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: actions.ADD_TRANSACTION,
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={
        { transactions: state.transactions, deleteTransaction, addTransaction }
    }>
        {children}
    </GlobalContext.Provider>)
}