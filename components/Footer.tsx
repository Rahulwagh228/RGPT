import { RiFacebookCircleLine } from "react-icons/ri"
import { RxTwitterLogo } from "react-icons/rx"
import { AiOutlineLinkedin } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import { BsInstagram } from "react-icons/bs"
import Link from "next/link"

export default function Footer() {

    const icons = [
        {
            icon: "BsFacebook",
            link: "/"
        },
        {
            icon: "AiFillTwitterCircle",
            link: "/"
        },
        {
            icon: "AiOutlineLinkedin",
            link: "/"
        },
        {
            icon: "FiGithub",
            link: "/"
        },
        {
            icon: "BsInstagram",
            link: "/"
        }
    ]

    const topic = [
        {
            id:1,
            name: "About Us",
        },
        {
            id:2,
            name: "Awards"
        },
        {
            id:3,
            name: "Help"
        },
        {
            id:4,
            name: "Contact"
        },
    ]

    return (
        <>
            <div className="bg-slate-500 h-80 md:h-[40vh] sm:h-[50vh]">
                <ul className="flex justify-evenly text-xl font-bold pt-5 ">
                    {topic.map((itm, index) => (
                        <li key={index} className="cursor-pointer text-slate-300 hover:text-slate-800 hover:scale-105 duration-200">{itm.name}</li>
                    ))}
                </ul>
                <hr className="border border-slate-400 m-9 mr-20 ml-20" />
                <div className=" w-2/3 m-auto text-xl text-slate-800 font-medium ">
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in, quas fugiat iure obcaecati, hic suscipit soluta veniam modi dolores voluptatem ab tempora, omnis ratione nisi numquam? Blanditiis commodi beatae at debitis accusamus ipsum!
                    </p>
                <div>
                    <ul className="flex gap-10 justify-center pt-10">

                        <li className="hover:bg-slate-600 rounded-lg">
                            <Link href="/"> <RiFacebookCircleLine className="h-11 w-11" /> </Link>
                        </li>
                        <li className="hover:bg-slate-600 rounded-lg">
                            <Link href="/"> <RxTwitterLogo className="h-10 w-10" /></Link>
                        </li>
                        <li className="hover:bg-slate-600 rounded-lg">
                            <Link href="/"> <AiOutlineLinkedin className="h-10 w-10" /></Link>
                        </li>
                        <li className="hover:bg-slate-600 rounded-lg">
                            <Link href="/"> <FiGithub className="h-10 w-10" /></Link>
                        </li>
                        <li className="hover:bg-slate-600 rounded-lg">
                            <Link href="/"> <BsInstagram className="h-10 w-10" /></Link>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="bg-slate-500  pb-1 pt-1">
                    <p className="text-center text-white font-light">&copy; 2023 Copyright: All rights reserved</p>
                    
                </div>


                {/* <div>
                    <ul className=" justify-center">

                        {icons.map((icn) => (
                            <li className="h-16 w-16"> {`<${icn.icon} />`}</li>
                        ))}
                    </ul>
                </div> */}
            </div>
        </>

    )
}