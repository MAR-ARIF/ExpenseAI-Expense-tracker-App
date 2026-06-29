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
        <div className="flex gap-4 w-full mt-5">
        <Input label="Monthly Budget(£)" 
        type="number"
        value={budgetAmount} 
        onChange={(e) => setBudgetAmount(e.target.value)}
        className="h-13"
        />
        <Button children="Save" className="px-6 py-0 h-13 mt-7" onClick={click} />
        
        </div>
    )
}
export default BudgetInput