"use client";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import LoginModal from "../models/LoginModel";
import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
    const loginModal= useLoginModal();
    const { data: currentUser } = useCurrentUser();
    const onClick = useCallback(()=>{
        if (!currentUser) {
            return loginModal.onOpen();
          }
    },[loginModal,currentUser]);

    return ( 
    <div  >
        <div onClick={onClick} className="
            mt-6
            lg:hidden
            rounded-full
            h-14
            w-14
            p-4
            flex
            item-center
            justify-center
            bg-sky-500
            hover:bg-opacity-80
            transition
            cursor-pointer">
            <FaFeather size={24} color="white"/>
        </div>

        <div onClick={onClick} className="
            mt-6
            hidden
            lg:block
            px-4
            py-2
            rounded-full
            bg-sky-500
            hover:bg-opacity-90
            cursor-pointer
            transition
            "> 
            <p className="
                hidden
                lg:block
                text-center
                font-semibold
                text-white
                text-[20px]">Tweet</p>
        </div>

    </div> );
}
 
export default SidebarTweetButton;