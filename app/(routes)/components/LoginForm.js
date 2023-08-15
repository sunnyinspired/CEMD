"use client";
import Image from "next/image"
import { useState } from "react"
import { signIn } from "next-auth/react";
import { useRouter, redirect } from "next/navigation";
//import { useSession } from "next-auth/react";

function LoginForm() {
    // const {data: session} = useSession()
    // if(session?.user){
    //   redirect("/dashboard")
    // }
    const router = useRouter()
    const [loginData, setLoginData] = useState({
      username: '',
      password: ''
    })
    const handleSubmit = async (e) =>{
      e.preventDefault()
      try {
        const response = await signIn('credentials', {
          username: loginData.username,
          password: loginData.password,
          redirect: false
        })
        if(response?.error == null){
          router.push('/dashboard')
        }
        else{
          alert(response?.error)
        }
      } catch (error) {
        
      }
    }
    return (
      <div className='w-full bg-gray-100 flex items-center justify-center h-screen'>
        <div className='bg-white lg:w-1/3 h-2/3 shadow-lg p-3'>
          <div className='font-bold py-2 flex justify-center'>
            <Image 
              src='/images/Login-logo.jpg'
              width={0}
              height={0}
              style={{width:"40%", height:'auto'}}
              sizes="100vw"
              alt="logo"
            />
          </div>
          <form className='block mt-7 p-3' onSubmit={handleSubmit}>
            <div className="flex justify-center border-b-2 border-red-400 mb-1 pb-1 mx-8">
              <input type="text" className='w-2/3 h-8 text-center' 
                placeholder='Username'
                autoComplete="off"
                onChange={(e) => setLoginData({...loginData, username:e.target.value})}
              />
            </div>
            <div className="flex justify-center mx-8">
              <input type="password" className='w-2/3 h-8 text-center' 
                placeholder='Password'
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              />
            </div>
            <div className="flex justify-center mx-8 mt-5">
              <input type="submit" 
                className='w-1/2 p-2  bg-red-600 cursor-pointer rounded-xl shadow-md text-white font-semibold' 
                value="Login"
              />
            </div>
            
          </form>
        </div>
        
      </div>
    )
}

export default LoginForm