import Navbar from "@/components/Navbar";

export default function contact(){

    const imageUrl =[

       
        "https://t4.ftcdn.net/jpg/02/93/06/85/240_F_293068579_c0qT1fZv4qLmVSeskOPEmXMTz8P0Agtd.jpg",
        
        "https://t3.ftcdn.net/jpg/06/15/62/10/240_F_615621051_3ugL2dIqYi47I54JPWxAnDXeutRMFnbc.jpg",
        
        "https://t3.ftcdn.net/jpg/02/07/79/38/240_F_207793822_6XoayG0Rvs0jFqfiwrPn7sY6sBY4w1xt.jpg",
        
        "https://t3.ftcdn.net/jpg/06/03/77/74/240_F_603777425_Tqw2UUl1u6c7XHsxhPxE3bRNAXVnEjJg.jpg",
        
        "https://t4.ftcdn.net/jpg/01/17/74/81/240_F_117748132_7ico8IduCgfd5dA84TuAkgE3VK6Zle1i.jpg",

        
    ]

    var i=0;

    
    
    
    const style = {
        backgroundImage: `url('${imageUrl[i]}')`,
    };
    

   


    setInterval(()=>{
        if(i < imageUrl.length){
            i=0;
        }
        // document.body.style.backgroundImage = `url('${imageUrl[i]}')`;
        i++;
    }, 3000);

    return(
        <section className="relative bg-cover bg-center bg-no-repeat h-screen w-full transition-background-image" style={style}>

            <Navbar />
            <div className="h-screen flex justify-center items-center">
                <button className="bg-slate-400 p-2 rounded-3xl m-2">Login first</button>
                <button className="bg-slate-400 p-2 rounded-3xl m-2">Try Rgpt</button>
            </div>
        </section>
        
    )
}