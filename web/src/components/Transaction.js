import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

export const Transaction = (props) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const { text, amount, id } = props.transaction
    const sign = amount > 0 ? '+' : '-'
    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span> <span>{sign}</span>${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li>
    )
}
