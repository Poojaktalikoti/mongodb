import React from 'react';
import Link from 'next/link';

 
const data = [
    { id: 1, name: "SelectCategories", subMenu:true },
    { id: 2, name: "DiscountProducts", subMenu:true },
    { id: 3, name: "Best Sellers", subMenu:true},

]; 
const Menu = (showCatMenu) => {
  return (
    <ul className="hidden md:flex items-center absolute top-7 right-1/4
     text-end gap-24 font-bold text-black">
       {data.map((item) => {
        return(
        <React.Fragment key={item.id}>
         
              {!!item?.subMenu ? (
                 <li className="cursor-pointer flex items-center text-end gap-2 relative">
                     {item.name}
                     {showCatMenu &&(
                      <ul className=" bg-black absolute top-24 right-10 min-w-[400px] px-8 text-black shadow-lg"></ul>
                     )}
                    </li>
                ):(
              
                
                 <li className="cursor-pointer">
                    <Link href={item?.url}>{item.subMenu}</Link>
                 </li>
                 )}

            </React.Fragment>
      
          
        );
       }) }
    </ul>
  );
};

export default Menu