import { useState } from "react";
import Button from "../Components/Button";
import TransactionList from "../Components/TransactionList";
import Container from "../Container/Container";
import AddExpenseForm from "../Components/AddExpenseForm";

function DashboardPage(){
    const [isOpen , setIsOpen] = useState(false);
    const click = () => {
        setIsOpen(true);
        
    }
    return (
        <div className="py-8">
            <Container>
                <TransactionList />
                <div className="text-center mt-4">
                    <Button onClick={click} children="+ Add Transaction" className="py-4 mx-auto px-10 text-xl" />
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