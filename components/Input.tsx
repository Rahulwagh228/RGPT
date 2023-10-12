import { AiOutlineSend } from "react-icons/ai"

export default function Input() {

    return (
        <>
            <div className="relative">

                <div className="flex mt-auto  ">
                    <input className="  w-4/5 rounded-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" />
                    <AiOutlineSend className="h-14 w-16 cursor-pointer " />
                </div>
            </div>
        </>
    )
} 