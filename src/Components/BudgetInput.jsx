import { useDispatch } from "react-redux";
import Button from "./Button";
import Input from "./Input";
import { setBudget } from "../slices/budgetSlice";
import { useState } from "react";

function BudgetInput(){
    const[budgetAmount , setBudgetAmount] = useState(() => {
        return JSON.parse(localStorage.getItem("budget")) || "";
    });
    const dispatch = useDispatch();

    const click = () => {

        dispatch(setBudget(Number(budgetAmount)));
        localStorage.setItem("budget", JSON.stringify(Number(budgetAmount)));

    }

    return (
        <div className="flex gap-4 max-w-100">
        <Input label="Monthly Budget(£)" 
        type="number"
        value={budgetAmount} 
        onChange={(e) => setBudgetAmount(e.target.value)}
        
        />
        <Button children="Save" className="px-6 py-0 h-11 mt-7" onClick={click} />
        
        </div>
    )
}
export default BudgetInput