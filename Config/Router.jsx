import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/loginpage'
import Signup from '../pages/signuppage'
import Profile from '../pages/profile'
import { auth, onAuthStateChanged } from './firebase'
import { Spin } from 'antd';

export default function Router() {

  const [user, setUser] = useState(false)
  const [loader, setLoader] = useState(true)

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
        
//         const uid = user.uid;
//         console.log(uid)
//         setUser(true)
//         setLoader(false)
//       } else {
//         console.log('user not login')
//         setUser(false)
//       }
//     });
//   }, [])


  return (
    <>
    {
    // loader ? 
    // <Spin/>
    // :
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login />} /> 
        {/* // user ? <Navigate to={'/profile'}/> : */}
        <Route path='/signuppage' element={<Signup />} />
        {/* user ? <Navigate to={'/profile'}/> :  */}
        <Route path='/profile' element={ <Profile />} />
        {/* user ? <Profile /> : <Navigate to={'/'}/> */}
      </Routes>
    </BrowserRouter>

    }
    </>
  )
}