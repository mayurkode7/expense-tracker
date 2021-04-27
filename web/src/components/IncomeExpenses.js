import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts.filter(item => item > 0)
    const finalIncome = income.length > 0 ? income.reduce((acc, item) => (acc += item)).toFixed(2) : 0
    const expense = amounts.filter(item => item < 0)
    const finalExpense = expense.length > 0 ? expense.reduce((acc, item) => (Math.abs(acc += item))).toFixed(2) : 0

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{numberWithCommas(finalIncome)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{numberWithCommas(finalExpense)}</p>
            </div>
        </div>
    )
}
