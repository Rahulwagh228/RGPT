
"use client"
import { CiCircleChevLeft } from "react-icons/ci";
import {TfiViewGrid} from "react-icons/tfi";
import React, { useState } from 'react';
import Image from "next/image";
import Logo from "@/app/assets/Images/Asset1.png";
import Input from "./Input";

export default function Sidebar() {
  
  const [Open, setOpen] = useState(true);
  const Menus = [
    {title : "Dashboard", src: ""}
  ]

  return (
    <div className="flex my-gradient">
      <div className={` ${Open ? " w-72" : " w-20"} p-4 pt-8 duration-300 h-screen bg-dark-purple relative`}>

        <CiCircleChevLeft className={`absolute cursor-pointer -right-4 top-9  h-8 w-8 rounded-full bg-white
         ${!Open && "rotate-180"} `}
          onClick={() => setOpen(!Open)}
        />

        <div className="flex gap-x-4 items-center ">
          <Image src={Logo} alt="logo" className={` ${Open ? "h-16 w-20" : "h-9 w-10"} rounded-full cursor-pointer duration-200 `}/>
          <h1 className={`text-white font-medium origin-left text-xl duration-200 ${!Open && "scale-0"}`}>Rgpt</h1>
        </div>
       
        
      </div>


      <div className="p-7 text-2xl font-semibold flex-1 h-screen ">
        <h1>Home Page</h1>
        <div className="absolute bottom-0 w-4/5">
        <Input />

        </div>
      </div>
    </div>
  )
}