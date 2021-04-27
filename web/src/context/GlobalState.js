import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { actions } from '../config'
import axios from "axios";

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

// init context 
export const GlobalContext = createContext(initialState)


// init provider

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions

    async function getTransactions() {

        try {
            const response = await axios.get('/api/v1/transactions')

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: response.data.data
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: 'GET_TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }
    }



    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type: actions.DELETE_TRANSACTION,
                payload: id
            });
        } catch (error) {
            console.log(error)
            dispatch({
                type: 'GET_TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }
    }

    async function addTransaction(transaction) {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const newTransaction = await axios.post('/api/v1/transactions', transaction, config)
            dispatch({
                type: actions.ADD_TRANSACTION,
                payload: newTransaction.data.data
            });

        } catch (error) {
            console.log(error)
            dispatch({
                type: 'GET_TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }


    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}