export const selectMonthlyExpense = (transactions) => {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    let total = 0;

    transactions.forEach((t) =>{
        const date = new Date(t.date);
        const transactionMonth = date.getMonth();
        const transactionYear = date.getFullYear();

        if(month == transactionMonth && year == transactionYear){
            total += Number(t.amount);
        }
        

    })
    return total;

}