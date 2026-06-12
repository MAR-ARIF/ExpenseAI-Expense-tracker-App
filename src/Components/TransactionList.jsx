import { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem";
import databaseService from "../appwrite/database";


function TransactionList(){
    const [expenses , setExpenses] = useState([]);

    useEffect(() => { 
        databaseService.getAllExpenses().then((expenses)=> {
            if(expenses) setExpenses(expenses.documents);
        })
    },[]);
    return(
        <div className="max-w-5xl mx-auto bg-white border border-gray-400 rounded-lg mt-10">
            {expenses.map((expense) => (
                <div key={expense.$id}>
                    <TransactionItem  {...expense}/>
                </div>
            ))}
        </div>
    )

}
export default TransactionList;