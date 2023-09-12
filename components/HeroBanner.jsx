import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';


 const HeroBanner = () => {
  return (
         <div className="flex-initial w-full">
    
             <div className=" bg-yellow-300 h-[318px] md-h[300px]"> 
                  <div className=" absolute top-14 left-0 right-0 px-4 py-2 opacity-70">
                     <h3 className=" text-6xl text-slate-950 font-extrabold">Get Fresh Grocery
                     <p className="break-normal">now at less time </p>    
                        </h3>



<div className=" absolute left-2 right-0 text-black text-xs">
Did you ever imagine that the freshest of fruits & vegetables , top quality 
pulses and food grains ,dairy products <p className="break-normal"> and hundreds of items could be handpicked and delivered to your  home,
 all at the click of a button? </p> 
 <p className="break-normal">India’s first comprehensive online megastore,healthyfood.com </p>
 </div>

                  </div>
<div class="mb-3">
  <div class="relative mb-4 flex w-96 top-48 left-20 flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border
       border-solid border-neutral-50 bg-white bg-clip-padding px-3 py-[0.25rem] 
       text-base font-normal leading-[1.6] text-neutral-700 outline-none transition
        duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 
        focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none
         dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 
         dark:focus:border-primary"
      placeholder="Search Products..." />

    
    <div
      class="relative z-[2] flex items-center rounded-r bg-primary px-3 py-2
      bg-green-500 hover:shadow-lg active:bg-primary-800 active:shadow-lg w-30">
       <img src="search.png"/>
    </div>
  </div>
</div>
             
             </div>

              <div className=" flex-initial w-32">
                <img src="Fruits-and-Vegetables.jpg" 
                      className="h-[180px] md:h-[250px] top-32 absolute right-0"/></div>


                      

        {/*---------------------------------------------------------------------------------*/}              
      
       <div className="flex justify-between flex-row py-8 " >
  <div className= "p-2 w-28 h-36 bg-green-300 ml-3">
   <img src="F & V.png"/> 
            <div className=" flex flex-wrap mt-0">
                <div className=" absolute text-center text-black text-xs font-normal">
                        Fruits & <p className="break-normal">Vegetables</p></div>
                           </div>
                            
                               </div>
                                

<div className= "p-2 w-28 h-36 bg-green-300">
  <img src="Dairy.png"/> 
     <div className=" flex flex-wrap mt-1 ml-2">
            <div className=" absolute text-center text-black text-xs font-medium">
                    Eggs & Dairy</div>
                            </div>   
                                 </div>
          
          
<div className= "p-2 w-28 h-36 bg-green-300">
     <img src="Grains..png"/> 
           <div className=" flex flex-wrap mt-1 ml-2">
            <div className=" absolute text-center text-black text-xs font-medium">
                           MultiGrains & <p className="break normal text-center">Masala</p></div>
                           </div>
                                </div>
              
  <div className= "p-2 w-28 h-36 bg-green-300">
        <img src="Bakery1.png"/> 
                <div className=" flex flex-wrap mt-1 ml-3">
                  <div className=" absolute text-center text-black text-xs font-medium">
                          Bakery & <p className=" break-normal text-center">Cakes</p></div>
                           </div>
                              </div>
                
 <div className= "p-2 w-28 h-36 bg-green-300">
     <img src="nuts.png"/> 
                  <div className=" flex flex-wrap mt-1 ml-3">
                  <div className=" absolute text-center text-black text-xs font-medium">
                           DryFruits & <p className="break-normal text-center">Seeds</p></div>
                           </div>
                                   </div>
    
 <div className= "p-2 w-28 h-36 bg-green-300">
      <img src="softdrinks1.png"/> 
                  <div className="flex flex-wrap ml-3 mt-1">
                  <div className="absolute text-center text-black text-xs font-medium">
                           Bevarages</div>
                           </div>
                                </div>
                
 <div className= "p-2 w-28 h-36 bg-green-300">
         <img src="snacks.png"/> 
                  <div className=" flex flex-wrap mt-1">
                  <div className=" absolute text-center text-black text-xs font-medium">
                           Snacks & <p className="break-normal">packedFoods</p></div>
                           </div>
                                     </div>

     <div className= "p-2 w-28 h-36 bg-green-300 mr-3">
         <img src="mop.png"/> 
                  <div className=" flex flex-wrap mt-1 ml-3">
                  <div className=" absolute text-center text-black text-xs font-medium">
                           cleaning & <p className="break-normal">Household</p></div>
                           </div>
                                     </div>


                </div>

                           
                     

                     
               

                
                
                
                
                


              





              </div>
   
   
   
   
   
   


      


          
   
      
   
         )
}

export default HeroBanner