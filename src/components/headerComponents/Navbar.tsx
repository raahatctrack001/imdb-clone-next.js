import NavbarComponents from "./NavbarComponents";
export default function(){
  return (
    <div className='flex dark:bg-gray-600 shadow shadow-white border-b-2 p-4 lg:text-lg justify-center gap-6'>
      <NavbarComponents title='Trending' param='fetchTrending' />
      <NavbarComponents title='Top Rated' param='fetchTopRated' />
    </div>
  );
}