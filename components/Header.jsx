import React, { useState,useEffect } from 'react'
import Wrapper from './Wrapper';

import Link from 'next/link';
import Menu from './Menu';

import { BsCart } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';


const Header = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrolly, setLastScrolly] = useState(0);

    const controlNavbar = () =>{
      if(window.scrollY > 200) {            
 
 
         if(window.scrollY > lastScrolly){
   
                   setShow("-translate-y-[80px]");
        }else{
          setShow("shadow-sm");
        }
      
      }else {
        setShow("translate-y-0");
      }
      setLastScrolly(window.scrollY)

    };

    useEffect(()=>{
      window.addEventListener("scroll",controlNavbar);
      return()=>{
        window.removeEventListener("scroll",controlNavbar)
      }

    },[lastScrolly] )

return (
  <header 
       className={'w-full h-[50px] md:h-[60px] bg-gray-400 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}'}>
<Wrapper className="h-[60px] flex justify-between place-items-center">
   <Link href="/">
   <img src="/logo.PNG" className="w-[150px]; md:w-[67px] mix-blend-darken absolute top-0"/>
   </Link>
      <Menu showCatMenu={showCatMenu} 
  setShowCatMenu={setShowCatMenu}
/>
          <div className="flex items-end gap-4 text-black absolute right-5 top-2">

            
            {/* Cart icon start*/}
            <div className="w-10 md:w-14 h-8 md:h-14 rounded-full flex justify-center
            items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[80px] md:text-[60px]"/>
              <div className="h-[16px] md:h-[20px] min-w-[18px] md:min-[20px]
              rounded-full top-1 left-5 md:left-7 ">
              </div>
              
            </div>
            {/*icon end*/}

                      {/* person icon start*/}
                      <Link href={"C:\Users\.user\Desktop\Profile"}>
            <div className="w-10 md:w-14 h-8 md:h-14 rounded-full flex justify-center
            items-center hover:bg-black/[0.05] cursor-pointer relative">
              
              <BsFillPersonFill className="text-[80px] md:text-[60px]"/>
              <div className="h-[16px] md:h-[20px] min-w-[18px] md:min-[20px]
              rounded-full top-1 left-5 md:left-7 ">
                
              </div>
             
            </div>
            </Link>
            {/*icon end*/}


         

              </div>




   

   </Wrapper>
  </header>
);
};

export default Header