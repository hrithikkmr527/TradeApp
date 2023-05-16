import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom"
import axios from "axios"
import ItemsPage from "./ItemsPage"
import TradeRequestsPage from "./TradeRequestsPage"

export default function AccountPage(){
    const {ready, user,setUser}= useContext(UserContext)
    const [redirect, setRedirect]= useState(null);

    if (!ready){
        return 'Loading...'
    }

    if(ready && !user && !redirect){
        return <Navigate to={'/login'} />
    }

    async function logout(){
        await axios.post('/logout')
        setRedirect('/')
        setUser(null)

    }
    if (redirect){
        return <Navigate to={redirect} />
    }

    const {subpage}=useParams();
    console.log(subpage)

    function linkClasses(type=null){
        if(type== subpage){
            return 'py-2 px-6 p-2 bg-primary text-black rounded-full'
        }
        return 'py-2 px-6 '
    }
    return (
    <div>
        <div className="flex flex-col items-center justify-center">
           
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="" alt="User Image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800">My Requests</a>
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Edit Profile</a>
                </div>
            </div>
        </div>

            <div>
                <nav className="w-full flex justify-center mt-8 gap-2 ">
                    
                    <Link className={linkClasses('trade_requests')} to={'/account/trade_requests'}>
                        <div className="flex gap-1">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>

                        Trade Requests
                        </div>
                        </Link>
                    <Link className={linkClasses('items')} to={'/account/items'}>
                        <div className="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>

                        My Items
                        </div>
                        </Link>
                </nav>
            </div>
        </div>
        {
            subpage===undefined && (
                <div className="inline flex mt-2 mx-auto justify-center">
            <button className='primary max-w-md' onClick={logout} >Logout </button>
        </div>
            )
        }
        
        {
            subpage==='items' && (
                <ItemsPage />
            )
        }
        {
            subpage==='trade_requests' &&(
                <TradeRequestsPage />
            )
        }
    </div>)
}