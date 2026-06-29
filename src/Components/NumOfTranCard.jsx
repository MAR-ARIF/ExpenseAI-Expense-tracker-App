import { useSelector } from "react-redux"
import Card from "./Card";

function NumOfTranCard(){
    const transactions = useSelector((state) => state.transaction.transactions);
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    let countTrans = 0;

    transactions.forEach((t) => {
        const date = new Date(t.date);
        const transactionMonth = date.getMonth();
        const transactionYear = date.getFullYear();

        if(month == transactionMonth && year == transactionYear){
            countTrans++;
        }
    })

    return (
        <>
            <Card
            header="Number of Transactions"
            body={countTrans}
            footer="this month"
            />
        </>
    )
}
export default NumOfTranCard