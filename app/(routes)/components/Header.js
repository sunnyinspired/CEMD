'use client'
import Link from 'next/link'
import { useState } from 'react'
import { MenuItems } from '@/utils/constants/MenuItems';
import { signOut, useSession } from 'next-auth/react';

// const Hamburger = () =>{
//     return(
//         <div className='w-[240px] fixed flex flex-col top-0 right-1 
//             lg:hidden bg-slate-500 h-screen pl-5 pt-16
//             duration-300'>
//             <nav className='text-left'>
//                 Hello Hamburger
//             </nav>
//         </div>
//     )
// }

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const {data: session} = useSession()
    const filteredMenu = MenuItems.slice(0, 4);
  return (
    <header className='bg-white h-12 flex items-center justify-between  px-8 border-t-2 border-red-400 shadow-md flex-wrap w-full'>
        <div className='logo w-1/3 font-bold text-red-500 max-md:block'>
            CEMD
        </div>

       
            <div className='lg:hidden  flex items-center justify-center'>

                <span 
                    className={` ${openMenu ? 'fa-sharp fa-regular fa-circle-xmark text-white text-4xl' : 'fa-solid fa-bars'}  text-red-500 block cursor-pointer text-3xl z-10`} 
                    onClick={() =>setOpenMenu(prev => !prev)}>

                </span>
            </div>

        <nav className={`${openMenu ? 'block' : 'hidden'} 
            w-[240px] fixed lg:static flex flex-col top-0 right-0 text-white
            transform transition duration-200 ease-in
          bg-slate-500 h-screen pl-5 pt-16 
            lg:w-auto lg:flex lg:items-center lg:h-auto lg:bg-transparent lg:mt-1.5
            lg:pl-0 lg:pt-0  lg:text-black`}>
            <ul className='lg:flex lg:items-center lg:mr-8'>
                {
                    session?.user?.role === 'Super Admin' || session?.user?.role === 'Admin' ?
                    MenuItems.map(([title, url]) => (
                        <li key={title}>
                            <Link href={url} className={`${openMenu && 'hover:bg-transparent hover:text-white'} py-2 px-3 block hover:bg-slate-200 hover:text-red-500 font-semibold text-sm`}>
                            {title}
                            </Link>
                        </li>
                    ))
                    :
                    filteredMenu.map(([title, url]) => (
                        <li key={title}>
                            <Link href={url} className={`${openMenu && 'hover:bg-transparent hover:text-white'} py-2 px-3 block hover:bg-slate-200 hover:text-red-500 font-semibold text-sm`}>
                            {title}
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <i className='fa-solid fa-sign-out py-2 px-3 block text-md font-bold
                     text-red-500  hover:bg-slate-200 cursor-pointer'
                     onClick={() => signOut()}>
                         
                    </i>
                </li>      
            </ul>
        </nav>
        
    </header>
  )
}

export default Header;