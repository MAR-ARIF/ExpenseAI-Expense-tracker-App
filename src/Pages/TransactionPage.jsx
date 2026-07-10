
import { useSelector } from "react-redux";
import TransactionList from "../Components/TransactionList";
import Container from "../Container/Container";
import { useState } from "react";
import AddExpenseForm from "../Components/AddExpenseForm";



function TransactionPage(){
    const [selected , setSelected] = useState("All");
    const [isOpen , setIsOpen] = useState(false);
    const transactions = useSelector((state) => state.transaction.transactions);
    const categories = ["All", "Foods" , "Grocery" , "Transportation", "Shopping" , "Utilities" , "Entertainment" , "Health"]
    
    return(
        <div className="py-8">
            <Container>
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold mb-4">Transactions</h1>
                    <button 
                    className="mb-4 bg-indigo-500 rounded-xl px-4 hover:scale-105 active:scale-95 transition-all duration-200 py-2 text-white font-semibold "
                    onClick={() => setIsOpen(true)}
                    >+ Add</button>
                </div>
                <div className="flex gap-3 flex-wrap ">
                    {categories.map((c) => (
                        <div key={c}>
                        <button 
                        onClick={() => setSelected(c)}
                        className={`border border-gray-200 px-4 py-0.5 rounded-xl text-md font-semibold ${selected == c ? "bg-indigo-500 text-white" : "bg-slate-50 hover:bg-slate-100"} `}
                        >
                                {c}
                        </button>
                        </div>
                    ))}
                


                </div>
                
                <TransactionList hideHeader={true} category={selected} />

                {isOpen && (
                    <div 
                    className="fixed inset-0 bg-black/50 flex justify-center items-center"
                    onClick={() => setIsOpen(false)}
                    >
                        <div onClick={(e) => e.stopPropagation()}>
                            <AddExpenseForm onSuccess={() => setIsOpen(false)} />
                        </div>        
                    </div>
                )}
                
                
            </Container>
        </div>
    )
}
export default TransactionPage