import { actions } from '../config'

const AppReducer = (state, action) => {
    switch (action.type) {
        case actions.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction._id !== action.payload)
            }

        case actions.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }

        case actions.GET_TRANSACTIONS:
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }

        case actions.GET_TRANSACTIONS_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default AppReducer