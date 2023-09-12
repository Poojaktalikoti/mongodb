import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"



export default function Home() {
  return <main className="h-[1200px] w-full flex-shrink-0 ">
    <HeroBanner/>
    <Wrapper>
    <div class="grid grid-cols-5 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-2">
  

        <ProductCard/>
        


      </div>
    </Wrapper>
  </main>
  
}
