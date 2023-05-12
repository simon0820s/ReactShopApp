import React from "react";
import {RiHome2Line,RiPercentLine,RiPieChartLine,RiMailOpenLine,RiSettings4Fill,RiLoginBoxLine, RiLogoutBoxLine} from "react-icons/ri";


const SideBar=()=>{
    return(
        <div className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full rounded-md">
            <ul className="pl-4">
                <li>
                    <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">logo</h1>
                </li>

                <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
                    <a href="#" className="inline-block bg-[#ec7c6a] p-4 box-content rounded-lg text-white">
                        <RiHome2Line className="text-2xl text-center"/>
                    </a>
                </li>

                <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors duration-300">
                    <a href="#" className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-300">
                        <RiPercentLine className="text-2xl text-center"/>
                    </a>
                </li>

                <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors duration-300">
                    <a href="#" className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-300">
                        <RiPieChartLine className="text-2xl text-center"/>
                    </a>
                </li>

                <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors duration-300">
                    <a href="#" className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-300">
                        <RiMailOpenLine className="text-2xl text-center"/>
                    </a>
                </li>

                <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors duration-300">
                    <a href="#" className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-300">
                        <RiSettings4Fill className="text-2xl text-center"/>
                    </a>
                </li>

                <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors duration-300">
                    <a href="#" className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-300">
                        <RiLogoutBoxLine className="text-2xl text-center"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default SideBar