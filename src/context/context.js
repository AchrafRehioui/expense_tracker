import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":450,"category":"Travel","type":"Expense","date":"2021-01-31","id":"5d5572c0-e9f7-48e8-a882-6354a92136a3"},{"amount":96,"category":"Clothes","type":"Expense","date":"2021-01-28","id":"853672cb-32ec-4a77-829e-57e1d6dd83d1"},{"amount":666,"category":"Extra income","type":"Income","date":"2021-01-21","id":"47dd4e2a-b29d-44f4-952a-79c5102a9cf9"},{"amount":100,"category":"Salary","type":"Income","date":"2021-01-25","id":"dca17dfa-174c-4d65-828b-73d76734f506"}];

export const ExpenseTrackerContext = createContext(initialState);


export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    console.log(transactions);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}