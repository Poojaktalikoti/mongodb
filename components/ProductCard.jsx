import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return(
  <section className=" py-3 ml-1">
       <h1 className=" absolute text-5xl font-bold text-black">Discount Products</h1>

       <div className=" flex absolute justify-between gap-14 flex-row py-20">
           <div className=" left-4">
            <div className="text-white bg-red-600 w-28 ml-40">Get 10% OFF</div>
            <img src="Tomato.png" className=" w-64 h-56"/>
            <div className="text-xl text-center">Fresh Tomatos</div>
            </div>

            <div className="left-20">
            <div className="text-white bg-red-600 w-28 ml-40">Get 10% OFF</div>
            <img src="Orange.png" className=" w-64 h-56"/>
            <div className="text-xl text-center">Orange</div>
            </div>
        
            <div className="right-20">
            <div className="text-white bg-red-600 w-28 ml-40">Get 10% OFF</div>
            <img src="Eggs.png" className=" w-64 h-56"/>
            <div className="text-xl text-center">Eggs</div>
            </div>


            <div className="right-4">
            <div className="text-white bg-red-600 w-28 ml-32">Get 10% OFF</div>
            <img src="WheatGrains.png" className=" w-64 h-56"/>
            <div className="text-xl text-center">MultiGrains</div>
            </div>
       </div>
  
 



  





     </section>           
                
                 
 
  );
  
};

export default ProductCard