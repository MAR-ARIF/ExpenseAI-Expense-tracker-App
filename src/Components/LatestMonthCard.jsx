import { useMemo } from "react";
import { useSelector } from "react-redux"
import Card from "./Card";

function LatestMonthCard(){
    const transactions = useSelector((state) => state.transaction.transactions);
    const monthlyExpense = useMemo(() => {
        
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();

        let total = 0;
        transactions.forEach((t) => {
            const date = new Date(t.date);
            const transactionMonth = date.getMonth();
            const transactionYear = date.getFullYear();

            if (month == transactionMonth && year == transactionYear) {
                total += Number(t.amount);
            }

        })
        return total;

    },[transactions])
    
    

    return(
        <>
            <Card 
            header="Total spent"
            body={`£${monthlyExpense}`}
            footer="this month"
            />
        </>
    )
}
export default LatestMonthCard