import { useDispatch, useSelector } from "react-redux"
import databaseService from "../appwrite/database";
import { addTransaction } from "../slices/transactionSlice";
import Input from "./Input";
import { useForm } from "react-hook-form";
import Select from "./Select";
import Button from "./Button";
import TransactionList from "./TransactionList";
import { useState } from "react";

function AddExpenseForm({onSuccess}){

    const[error , setError] = useState("")

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.userData);
    const {register , handleSubmit} = useForm({
        defaultValues : {
            description : "",
            amount: "",
            date: "",
            category:""

        }
    })
    const submit = async(data) =>{
        try {
            if(!userData ){
                console.log("user not logged in");
                return;
            }
            const transaction = await databaseService.createExpense({...data ,amount : Number(data.amount), userId : userData.$id })
            console.log("transaction", transaction);
            if(transaction){
                dispatch(addTransaction(transaction));
                onSuccess();
            }
            
        } catch (error) {
            setError(error.message);
            
        }

    }
    return(
        <form onSubmit={handleSubmit(submit)} className="w-80 md:w-120 mx-auto bg-white border-2 border-gray-200 shadow-sm rounded-2xl px-6 py-6">
            <div className="flex flex-row justify-between items-center mb-2">
                <h1
                 className="font-semibold text-2xl">
                    Add Expense</h1>
                <Button 
                className="bg-white hover:bg-gray-50 w-fit p-2 rounded-xs" children="✖️"
                onClick={onSuccess}
                />
            </div>
            <Input label="Name" placeholder="e.g. Grocery run" {...register("description", {required: true})}  />
            <Select label="Category" placeholder="Select a category..."
            options={["Grocery" , "Transportation" , "Foods" , "Shopping" , "Utilities" , "Entertainment" , "Health"]} 
            {...register("category", {required:true})}
            />
            <Input label="Amount" placeholder="0.00" {...register("amount" , {required: true})}/>
            <Input label="Date" type="date" placeholder="e.g. 1st January" {...register("date" , {required: true})}/>
            <Button type="submit" children="Add Expense" className="w-full" />

            {error && (
                <p className="text-red-500 text-sm mt-4">
                    {error}
                </p>
            )}
        </form>
    )
}
export default AddExpenseForm