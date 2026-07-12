import { Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import databaseService from "../appwrite/database"
import { useDispatch } from "react-redux"
import { deleteTransaction } from "../slices/transactionSlice";


function TransactionItem({
    $id,
    description,
    category,
    date,
    amount,
    ...props
})
    
{   const dispatch = useDispatch();
    const handleDelete = () => {
        databaseService.deleteExpense($id);
        dispatch(deleteTransaction($id))
        
    }
    return(
        <div 
       
        className="w-full flex border-b rounded-md group border-gray-300 px-5 py-1 justify-between hover:bg-gray-100">
            <div>
                <h1 className="text-lg font-semibold text-black">{description}</h1>
                <p className="text-gray-500">{category}  • {new Date(date).toLocaleDateString("en-GB" , {
                    day: "numeric",
                    month : "long",
                    year : "numeric"
                })}</p>
            </div>
            <div className="text-red-500 text-lg gap-5 flex items-center justify-center mb-3">
                <p>-£{amount}</p>
                <button 
                onClick={handleDelete}
                className="hover:scale-130 opacity-0 group-hover:opacity-100 cursor-pointer active:scale-95  transition-all"><Trash2 className="w-4 h-4 text-black " /></button>
            </div>
            

        </div>
    )
    
}
export default TransactionItem