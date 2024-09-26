import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import MenuItems from "./MenuItems";
import Link from "next/link";
export default function Header(){
    return <div className="flex justify-between items-center px-32 py-2 border-b-2 shadow-lg shadow-gray-600"> 
        <div className="flex justify-center items-center gap-5">            
            <MenuItems Title="Home" Icon={FaHome} Address={"/"} />
            <MenuItems Title="About" Icon={FaInfoCircle} Address={"/about"} /> 
        </div>
        <div className="flex items-center">
            <Link href={"/"} className="px-3 py-2 mr-1 bg-orange-500 rounded-lg font-semibold text-white"> IMDb </Link> clone
        </div>       
     </div>
}