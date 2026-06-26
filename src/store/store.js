import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import transactionReducer from "../slices/transactionSlice"
import budgetReducer from "../slices/budgetSlice"

const store = configureStore({
    reducer : {
        auth: authReducer,
        transaction : transactionReducer,
        budget : budgetReducer
    }
})
export default store