import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    transactions: []
}
const transactionSlice = createSlice ({
    name : "transaction",
    initialState,
    reducer : {
        addTransaction : (state,action) => {
            state.transactions.unshift(action.payload);
        },
        deleteTransaction : (state,action) => {
            state.transactions = state.transactions.filter(
                (t) => t.$id !== action.payload
            )
        }

    }


}
)
export const {addTransaction , deleteTransaction} = transactionSlice.action
export default transactionSlice.reducer 