import { useEffect} from "react";
import TransactionItem from "./TransactionItem";
import databaseService from "../appwrite/database";
import { useDispatch, useSelector } from "react-redux";
import { setTransaction } from "../slices/transactionSlice";



function TransactionList(){
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.transaction.transactions);

    useEffect(() => { 
        databaseService.getAllExpenses().then((result)=> {
            if(result) dispatch(setTransaction(result.documents));
        })
    },[]);
    return(
        <div className=" mx-auto bg-white border border-gray-200 rounded-xl mt-10">
            <h1 className="text-2xl m-4 font-semibold">Recent Transactions</h1>
            {expenses.map((expense) => (
                <div key={expense.$id}>
                    <TransactionItem  {...expense}/>
                </div>
            ))}
        </div>
    )

}
export default TransactionList;