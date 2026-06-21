import { useDispatch } from "react-redux"
import authService from "../appwrite/auth";
import { logout } from "../slices/authSlice";
import Button from "./Button";

function Logout(){
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await authService.logout();
            dispatch(logout());
            
        } catch (error) {
            console.log(error)
            
        }
    }
    return(
        <Button onClick={handleLogout} children="Log out" className="bg-red-500 w-auto px-5" /> 
    )
}
export default Logout