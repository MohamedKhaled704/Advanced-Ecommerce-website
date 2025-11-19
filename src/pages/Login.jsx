import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("")
        
        try {
        await signInWithEmailAndPassword(auth, email, password);

        const registeredUser = JSON.parse(localStorage.getItem("registeredUser"))

        if(registeredUser.email !== email) {
          alert("This email does not match any registered account!");
          return
        }

        localStorage.setItem("currentUser", JSON.stringify(registeredUser));

        if(registeredUser.role === "admin") {
          navigate("/dashboard")
        } else {
          navigate("/books")
        }
        } catch (err) { setError(err.message)}
    }

  return (
    <div>
        <div className='container'>
            <div className='min-w-[440px] max-w-[720px]'>
          <h1 className='text-center capitalize font-bold text-[#393280] text-4xl tracking-wide'>log in </h1>
        <form action="" onSubmit={handleLogin} className='mt-10 flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor="email" className='capitalize text-gray-700'>email address</label>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email here...' className='px-1 py-2 text-[#393280] outline-none border border-[#393280] rounded-xl placeholder:text-[#393280]  placeholder:opacity-60 placeholder:text-[14px] placeholder:font-semibold' />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor="password" className='capitalize text-gray-700'>password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password...' className='px-1 py-2 text-[#393280] outline-none border border-[#393280] rounded-xl placeholder:text-[#393280] placeholder:opacity-60 placeholder:text-[14px] placeholder:font-semibold' />
          </div>
          <button className='capitalize bg-[#393280] text-white p-2 rounded-xl self-center'>log in</button>
        </form>
        <Link to="/signup">don’t have an account?..</Link>
        {error && <p className='text-red-600'> please make sure that the email or password you entered is correct </p>}
        </div>
        </div>
    </div>
  )
}
