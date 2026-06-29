import { useState } from "react";
import Button from "../Components/Button";
import TransactionList from "../Components/TransactionList";
import Container from "../Container/Container";
import AddExpenseForm from "../Components/AddExpenseForm";
import { useSelector } from "react-redux";
import ExpenseAreaChart from "../Components/ExpenseAreaChart";
import LatestMonthCard from "../Components/LatestMonthCard";
import BudgetCard from "../Components/BudgetCard";
import NumOfTranCard from "../Components/NumOfTranCard";
import BudgetInput from "../Components/BudgetInput";

function DashboardPage(){
    const [isOpen , setIsOpen] = useState(false);
    const click = () => {
        setIsOpen(true);
        
    }
    const transactions = useSelector( (state) => state.transaction.transactions);
    const grouped = {};
    transactions.forEach((t) => {
        grouped[t.category] = (grouped[t.category] || 0) + Number(t.amount);
    })
    const chartData = Object.keys(grouped).map((key) => ({
        category : key,
        amount : grouped[key]
    }))
    return (
        <div className="py-8">
            <Container>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
                    <LatestMonthCard />
                    <BudgetCard />
                    <NumOfTranCard />
                </div>
                <ExpenseAreaChart  data={chartData}/>
                <TransactionList />
                <div className="flex flex-col md:flex-row items-center justify-between  gap-4">
                    <div className="flex-1 mt-4">
                        <Button onClick={click} children="+ Add Transaction" className="w-full py-4 mx-auto px-10 text-xl" />
                    </div>
                    <div className="flex-1">
                        <BudgetInput />
                    </div>
                </div>
                
                
                {isOpen && <div
                    className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        <AddExpenseForm onSuccess={() => setIsOpen(false)} />
                    </div>
                    
                    </div>}

            
                
            </Container>
        
        </div>
    )
}
export default DashboardPage