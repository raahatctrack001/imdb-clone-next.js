import { Suspense } from "react";
import NavbarComponents from "./NavbarComponents";
export default function Navbar(){
  return (
    <div className='flex dark:bg-gray-600 shadow shadow-white border-b-2 p-4 lg:text-lg justify-center gap-6'>
        <Suspense fallback={<div>Loading search results...</div>}>        
            <NavbarComponents title='Trending' param='fetchTrending' />
            <NavbarComponents title='Top Rated' param='fetchTopRated' />
        </Suspense>
    </div>
  );
}