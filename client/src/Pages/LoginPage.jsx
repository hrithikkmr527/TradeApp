import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage(){
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [redirect, setRedirect] =  useState(false);
    const {setUser}=useContext(UserContext);
    async function LoginUser(ev){
        ev.preventDefault()
        try {

            const response=await axios.post('/login',{email,password})
            setUser(response.data)
            alert('login successful')
            setRedirect(true);
        }catch(e){
            alert('login failed')
        }
    }

    if (redirect){
        return <Navigate to={'/' } />
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">

            <h1 className="text-xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto" onSubmit={LoginUser}>
                <input type="email" placeholder="your@email.com" 
                value= {email} onChange={(ev)=>setEmail(ev.target.value)}/>
                <input type="password" placeholder="password" 
                value= {password} onChange={(ev)=>setPassword(ev.target.value)}/>
                <button class="primary">
                    Login
                </button>
                <div className="text-center py-2">Don't have an account yet?
                    <Link className="font-bold underline" to={'/register'}> Register Now</Link>
                </div>
            </form>
            </div>
        </div>
    )
}