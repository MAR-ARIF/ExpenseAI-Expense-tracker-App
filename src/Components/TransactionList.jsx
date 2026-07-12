import { useEffect} from "react";
import TransactionItem from "./TransactionItem";
import databaseService from "../appwrite/database";
import { useDispatch, useSelector } from "react-redux";
import { setTransaction } from "../slices/transactionSlice";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";



function TransactionList({hideHeader , category}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const expenses = useSelector((state) => state.transaction.transactions);
    const recentTransactions = expenses.slice(0,5);

    const expByCategory = expenses.filter((expense) => {
        return category === expense.category;
    })
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => { 
        databaseService.getAllExpenses(userData.$id).then((result)=> {
            console.log(result)
            if(result) dispatch(setTransaction(result.documents));
        })
    },[]);

    return( 
        <div className=" mx-auto bg-white border border-gray-200 rounded-xl mt-5">
            { hideHeader ? "" : 
            <div className="flex justify-between">
                <h1 className="text-2xl m-4 font-semibold">Recent Transactions</h1>
                <button 
                className="text-indigo-500 cursor-pointer group items-center text-sm font-medium flex"
                onClick={() => navigate("/transactions")}
                >
                    <span>
                        View all
                        <span className="block w-15 h-px scale-x-0 duration-300 group-hover:scale-x-100 bg-indigo-500 transition-transform origin-left"></span>
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 duration-300 transition-transform"/>
                </button>

            </div>
            }
            {category && category != "All" ? 
                expByCategory.length === 0 ? <p className="text-center text-gray-600 mt-10 mb-10">No transactions yet</p> :
                    expByCategory.map((expense) => (
                    <div key={expense.$id} >
                        <TransactionItem {...expense}  /> 
                        
                    </div>
                    ))
            :   expenses.length === 0 ?  <p className="text-center text-gray-600 mt-10 mb-10">No transactions yet</p> :
                recentTransactions.map((expense) => (
                    <div key={expense.$id}>
                        <TransactionItem  {...expense}/>
                    </div>
                )) 
            }
        </div>
    )

}
export default TransactionList;