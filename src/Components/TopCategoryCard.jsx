import { useSelector } from "react-redux"
import Card from "./Card";

function TopCategoryCard(){
    const transaction = useSelector((state) => state.transaction.transactions);
    let maxAmount = 0;
    let maxCategory = "";
    const grouped = {};


    transaction.forEach((t) => {
        grouped[t.category] = (grouped[t.category] || 0) + Number(t.amount);
    })
    Object.keys(grouped).forEach((key) => {
        if (grouped[key] > maxAmount) { 
            maxAmount = grouped[key];
            maxCategory = key;
        }
    })
    return(
        <>
            <Card header="Top Category" body={maxCategory} footer={`£${maxAmount} this month`} />
        </>
    )
}
export default TopCategoryCard