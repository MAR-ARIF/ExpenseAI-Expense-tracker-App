function TransactionItem({
    description,
    category,
    date,
    amount,
    ...props
}){
    return(
        <div className="w-full flex border-b rounded-md border-gray-300 px-5 py-1 justify-between hover:bg-gray-100">
            <div>
                <h1 className="text-lg font-semibold text-black">{description}</h1>
                <p className="text-gray-500">{category}  • {new Date(date).toLocaleDateString("en-GB" , {
                    day: "numeric",
                    month : "long",
                    year : "numeric"
                })}</p>
            </div>
            <div className="text-red-500 text-lg py-2">
                -£{amount}
            </div>

        </div>
    )
    
}
export default TransactionItem