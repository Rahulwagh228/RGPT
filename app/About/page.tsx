import './gridd.css'
import Image from 'next/image';
import rahul from "../assets/Images/Asset3.jpeg"
import rakhi from "../assets/Images/Asset2.jpeg"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {

    return (
        <>
            <Navbar />
            <div className="flex md:flex-col  justify-center items-center backgroundd">


                <div className="parent  md:flex-wrap">
                    <div className="div1">
                    <h1 className="text-3xl font-bold text-center text-gray-600">Meet our miscrosoft team</h1>
                    </div>

                    <div className="div2 md:block">
                    <Image src ={rahul} alt='Photo' className='rounded-full h-48 w-48'/>
                        <h1 className="text-2xl text-gray-800 font-bold text-center pt-6">Rahul Wagh</h1>
                 
                    </div>

                    <div className="div3 md: md:flex-col">
                        <Image src={rakhi} alt='photo' className='rounded-full h-48 w-48'/>
                        <h1 className="text-2xl text-gray-800 font-bold text-center pt-6">Rakhi Desale</h1>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}