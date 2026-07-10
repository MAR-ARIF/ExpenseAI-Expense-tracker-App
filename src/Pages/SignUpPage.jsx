import { Sparkles } from "lucide-react";
import SignUpForm from "../Components/SignUpForm";
import Container from "../Container/Container";
import { Link } from "react-router-dom";


function SignUpPage(){
    return(
        <div className="min-h-screen flex items-center justify-center">
            <Container>
                <h1 className="flex items-center justify-center mb-8 font-bold text-2xl  gap-1">
                    <Sparkles className="text-indigo-500"/>
                    ExpenseAI
                    
                    </h1>
                <SignUpForm />
                <p className="text-center mt-4 text-gray-600">Already have an account? 
                    <Link className="text-indigo-500 font-semibold ml-2 underline"
                     to="/login"
                    >
                    
                    Sign In
                    
                    </Link>
                    
                    
                </p>
                
            </Container>
        
        
        </div>
    )
}
export default SignUpPage