
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children ,authentication = true}){
    const [loader , setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if(authentication && !authStatus){
            navigate("/login")
        } else if (authStatus && !authentication){
            navigate("/")
        }
        setLoader(false);

    },[navigate, authentication, authStatus])
    return(
       loader ? (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-500">Loading</p>

        </div>
       ) : (<>{children}</>)
    )
}
export default AuthLayout