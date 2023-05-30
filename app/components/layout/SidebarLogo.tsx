
import { BsTwitter } from "react-icons/bs";
import Link from 'next/link';


const SidebarLogo = () => {
    
    
    return ( 
        <Link href="/">
     <div 
        className="
        rounded-full
        h-14
        w-14
        p-4
        flex
        item-center
        justify-center
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
        transition
    ">
        <BsTwitter size={28} color="white"/>

    </div>
    </Link> );
    
}
 
export default SidebarLogo;