import React from 'react'
import AppLogin from '../Components/Login'
import { Link, useNavigate } from 'react-router-dom'
import {auth, signInWithEmailAndPassword, getFirestore , db , setDoc , doc} from '../Config/firebase'

export default function Login() {

  const navigate = useNavigate()

const lfun =  (data) => {
    // console.log(data)
    signInWithEmailAndPassword(auth, `${data.username}@gmail.com`, data.password)
      .then( async (userCredential) => {
        const user = userCredential.user;
        console.log(user)

        await setDoc(doc(db, "users", "user"), {
            name: data.username ,
            email: `${data.username}@gmail.com`,
            password:data.password
          });

        navigate('/profile')

      })
      .catch((error) => {
        console.log(error)
      });

  }

  return (
    <div style={{ margin: '50px' }}>
      <h1>Login</h1>
      <AppLogin lfun={lfun} />
      <p>Don't have an account ? <Link to={'/signuppage'}>Signup</Link> </p>
    </div>
  )
}