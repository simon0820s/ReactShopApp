import React from "react";
import {RiHome2Line,RiPercentLine,RiPieChartLine,RiMailOpenLine,RiSettings4Fill,RiLoginBoxLine, RiLogoutBoxLine} from "react-icons/ri";
import SidebarItem from "./Item";

const SideBar=()=>{
    return(
        <div className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full rounded-md">
            <ul className="pl-4 h-2/4 flex flex-col justify-between">
                <h1 className="text-center text-2xl font-bold text-gray-400 top-4">LOGO</h1>
                <SidebarItem><RiHome2Line url={"#"}/></SidebarItem>
                <SidebarItem><RiPercentLine url={"#"}/></SidebarItem>
                <SidebarItem><RiPieChartLine url={"#"}/></SidebarItem>
                <SidebarItem><RiMailOpenLine url={"#"}/></SidebarItem>
                <SidebarItem><RiSettings4Fill url={"#"}/></SidebarItem>
            </ul>
            <div className="pl-8 mt-96 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors duration-300">
                    <a href="#" className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-300">
                        <div className="text-2xl text-center"><RiLoginBoxLine/></div>
                    </a>
            </div>
        </div>
    )
}


export default SideBar