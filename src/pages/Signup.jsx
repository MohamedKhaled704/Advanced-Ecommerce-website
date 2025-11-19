import React, { useState } from 'react'
import image1 from "../assets/images/bg-left.png"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user")
  const [error, setError] = useState("");

  const emailReg = /^[A-Za-z0-9._%+-]+@bookstores\.com$/;
  const passwordReg = /^.{8,}$/;
  
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("")

    if(!emailReg.test(email)) {
      setError("Please make sure you entered a valid email");
      return;
    }

    if(!passwordReg.test(password)) {
      setError("please make sure you entered a valid password");
      return;
    }

    try {
    const userAddition = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = {
      email,
      uid: userAddition.user.uid,
      role
    };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));

      alert("Signed up successfully!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      
      if(err.code === "auth/email-already-in-use") {
        setError("This email has used before, please try a new one")
      } else {
        setError("Error occurred, please try agian")
      }
    }
  }

  return (
    <div>    
      <div className='container flex justify-center'>
        {/* <div className='h-[90vh]' style={{backgroundImage: `url(${image1})`}}>
          <div>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clipRule="evenodd" d="M30 0C46.5685 0 60 13.4315 60 30V60H30C13.4315 60 0 46.5685 0 30C-3.8147e-06 13.4315 13.4315 0 30 0Z" fill="#918EF4"/>
<path fill-rule="evenodd" clipRule="evenodd" d="M15.68 30.585V30.193C18.098 29.948 19.28 28.714 19.28 26.344V22.021C19.28 19.389 20.218 18.321 22.537 18.321H23.194V16H22.294C18.412 16 16.584 17.826 16.584 21.658V25.324C16.584 27.956 15.684 28.824 13 28.824V31.949C15.68 31.949 16.584 32.82 16.584 35.449V39.115C16.584 42.947 18.41 44.773 22.29 44.773H23.19V42.458H22.533C20.214 42.458 19.276 41.39 19.276 38.758V34.434C19.281 32.066 18.1 30.832 15.68 30.585ZM44 30.193V30.585C41.582 30.833 40.4 32.067 40.4 34.434V38.759C40.4 41.391 39.462 42.459 37.143 42.459H36.486V44.778H37.386C41.266 44.778 43.092 42.952 43.092 39.12V35.453C43.092 32.821 43.992 31.953 46.676 31.953V28.826C43.996 28.826 43.092 27.955 43.092 25.326V21.658C43.093 17.826 41.264 16 37.387 16H36.487V18.319H37.144C39.463 18.319 40.401 19.387 40.401 22.019V26.344C40.401 28.711 41.584 29.944 44.001 30.193H44Z" fill="white"/>
<path fill-rule="evenodd" clipRule="evenodd" d="M30.5 27C32.433 27 34 28.567 34 30.5V34H30.5C28.567 34 27 32.433 27 30.5C27 28.567 28.567 27 30.5 27Z" fill="white"/>
</svg>

          </div>
        </div> */}
        <div className='min-w-[440px] max-w-[720px]'>
          <div className='grid grid-cols-2 mt-2'>
          <h1 className='text-center capitalize font-bold text-[#393280] text-4xl tracking-wide'>signup </h1>
          <Link to="/" className='capitalize relative bg-[#393280] text-white text-xl font-semibold justify-self-end p-2 scale-100 hover:scale-110 hover:underline'>home <span className='absolute w-[35px] h-full top-0 bg-[#393280] rounded-[10px] [clip-path:polygon(0%_0%,_70%_0%,_100%_50%,_70%_100%,_0%_100%)]'></span></Link>
          </div>
        <form action="" onSubmit={handleSignup} className='mt-10 flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor="email" className='capitalize text-gray-700'>email <span className='lowercase opacity-50 text-[14px]'>(ending with "@bookstores.com")</span></label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Create your email like "example@bookstores.com"' className='px-1 py-2 text-[#393280] outline-none border border-[#393280] rounded-xl placeholder:text-[#393280]  placeholder:opacity-60 placeholder:text-[14px] placeholder:font-semibold' />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor="password" className='capitalize text-gray-700'>password <span className='lowercase opacity-50 text-[14px]'>(at least "8" characters)</span></label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Set your password...' className='px-1 py-2 text-[#393280] outline-none border border-[#393280] rounded-xl placeholder:text-[#393280] placeholder:opacity-60 placeholder:text-[14px] placeholder:font-semibold' />
          </div>
          <div className="flex flex-col gap-y-2 mt-3">
  <span className="text-gray-700 capitalize">choose your role:</span>

  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="role"
      value="user"
      checked={role === "user"}
      onChange={(e) => setRole(e.target.value)}
    />
    <span>User</span>
  </label>

  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="role"
      value="admin"
      checked={role === "admin"}
      onChange={(e) => setRole(e.target.value)}
    />
    <span>Admin</span>
  </label>
</div>

          <button className='capitalize bg-[#393280] text-white p-2 rounded-xl self-center'>create account</button>
        </form>
        <Link to="/login">already have an account?..</Link>
        {error && <p className='text-red-600'> {error} </p>}
        </div>
      </div>  
    </div>
  )
}
