

// export  function Navbar1(){


//     return(
//             <div>
//                 <nav className="flex gap-10 justify-end pr-36 pt-2 pb-2 font-semibold bg-slate-300 ">
//                     <ul>

//                     <li className="cursor-pointer hover:scale-110 duration-200">Home</li>
//                     <li className="cursor-pointer hover:scale-110 duration-200">About</li>
//                     <li className="cursor-pointer hover:scale-110 duration-200">Conact</li>
//                     </ul>
//                 </nav>
//             </div>
//     )
// }


// ------------------ Navbar Using Map ----------------------
// import Link from "next/link"
// export default function Navbar(){

//     const  items =[
//         {

//           name:"Home",
//           Link:"/"
//         },
//         {
//           name:"About",
//           Link:"/About",
//         },
//         {
//             name:"Contact",
//             Link:"/Contact"
//         },
//         {
//             name:"Try-Chatgpt",
//             Link:"/"
//         }
//     ]
//     return (
//         <div>
//             <nav>
//                 <ul className="flex gap-8 bg-slate-600 pt-2 pb-2 font-semibold justify-end pr-28">

//                         {items.map((itm)=>(
//                             <li className="hover:scale-110 duration-200 hover:text-slate-300">
//                                 <Link href={itm.Link}>
//                                 {itm.name}
//                                 </Link>
//                                 </li>
//                         ))}

//                 </ul>
//             </nav>
//         </div>
//     )
// }


// --------------------Navbar with hamburger---------
'use client'
import Image from "next/image"
import { CgMenu } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Logo from "../app/assets/Images/Asset1.png"
import React, { useState } from 'react'
import Link from "next/link"
export default function Navbar() {

    const [toggle, settoggle] = useState(false);

    function changetogle() {
        // console.log(e)
        settoggle(!toggle);



    }
    function navchange (){
        const navlink = document.querySelector('.nav-link');

        if(navlink!=null){
                navlink.classList.toggle('hidden')
            
            
        }
        else{
            
        }
       
    }
   
      

    return (
        <div className="bg-slate-800">



            <div className="bg-white">

                <nav className=" flex justify-between items-center w-[92%] mx-auto">
                    <div>
                        {/* <img className="a" src={Logo} alt="..." /> */}
                        <Image src={Logo} alt="..." className="h-16 w-16 rounded-full" />
                    </div>
                    <div className="nav-link hidden bg-white md:block md:static absolute  md:min-h-fit md:w-auto min-h-[60vh] left-0 top-[20%] w-full  md:items-center px-5">
                        <ul className="flex md:flex-row flex-col md:gap-10 gap-8 pt-3 pb-3 font-semibold">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                            <Link href="/Contact">Contact</Link>
                            </li>
                            <li>
                            <Link href="/About">About</Link>
                            </li>
                            <li>
                            <Link href="/">pricing</Link>
                            </li>
                            <li>
                            <Link href="/">Try-Rgpt</Link>
                            </li>
                            <li>
                            <Link href="/">Products</Link>
                            </li>

                        </ul>
                    </div>
                    <div className=" flex items-center gap-6 pt-3 pb-3">
                        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#2561c9]"><Link href="/login">Login</Link></button>
                        <div onClick={() => { changetogle(), navchange()}}>
                            {toggle ? <AiOutlineCloseCircle className="h-11 w-11 md:hidden" /> :
                                <CgMenu className="h-11 w-11 md:hidden" />}
                        </div>
                    </div>

                </nav>
            </div>
        </div>

    )
}


// -------------Responsive nav with map ---------------


