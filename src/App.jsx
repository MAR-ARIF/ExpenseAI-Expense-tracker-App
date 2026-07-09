
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import { useEffect, useState } from "react"
import authService from "./appwrite/auth"
import { useDispatch } from "react-redux"
import { login, logout } from "./slices/authSlice"




function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getUser().then((userData) => {
      if (userData){
        dispatch(login(userData))
      } else {
        dispatch(logout());
      }
    })
    .finally(() => {setLoading(false)})
  } , [])
 

  return !loading ?  (
    <div className="bg-slate-100 min-h-screen">
    
      <Header />
      <Outlet />

    </div>
  ) : null
}

export default App
