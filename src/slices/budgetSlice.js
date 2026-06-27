import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    budget : JSON.parse(localStorage.getItem("budget")) || 0
}
const budgetSlice = createSlice ({
    name : "budget",
    initialState,
    reducers : {
        setBudget : (state, action) => {
            state.budget = action.payload
        }
    }
})

export const {setBudget} = budgetSlice.actions
export default budgetSlice.reducer