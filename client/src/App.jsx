import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './Layout'
import IndexPage from './Pages/IndexPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import { useEffect } from 'react'
import AccountPage from './Pages/AccountPage'

axios.defaults.baseURL='http://localhost:4000'
axios.defaults.withCredentials= true

function App() {
  

  return (
    <UserContextProvider>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/account/:subpage?' element={<AccountPage />} />
        <Route path='/account/:subpage/:action' element={<AccountPage />} />
        
      </Route>

    </Routes>
    </UserContextProvider>
    
  
  )
}

export default App
