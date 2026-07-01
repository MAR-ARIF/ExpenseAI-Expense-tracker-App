import { useEffect} from "react";
import TransactionItem from "./TransactionItem";
import databaseService from "../appwrite/database";
import { useDispatch, useSelector } from "react-redux";
import { setTransaction } from "../slices/transactionSlice";



function TransactionList({hideHeader , category}){
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.transaction.transactions);
    const expByCategory = expenses.filter((expense) => {
        return category === expense.category;
    })

    useEffect(() => { 
        databaseService.getAllExpenses().then((result)=> {
            if(result) dispatch(setTransaction(result.documents));
        })
    },[]);
    return(
        <div className=" mx-auto bg-white border border-gray-200 rounded-xl mt-5">
            { hideHeader ? "" : <h1 className="text-2xl m-4 font-semibold">Recent Transactions</h1>}
            {category && category != "All" ? 
                expByCategory.length === 0 ? <p className="text-center text-gray-600 mt-10 mb-10">No transactions yet</p> :
                    expByCategory.map((expense) => (
                    <div key={expense.$id} >
                        <TransactionItem {...expense}  /> 
                        
                    </div>
                    ))
            :   expenses.length === 0 ?  <p className="text-center text-gray-600 mt-10 mb-10">No transactions yet</p> :
                expenses.map((expense) => (
                    <div key={expense.$id}>
                        <TransactionItem  {...expense}/>
                    </div>
                )) 
            }
        </div>
    )

}
export default TransactionList;