import React from "react";
import {RiHome2Line,RiPercentLine,RiPieChartLine,RiMailOpenLine,RiSettings4Fill,RiLoginBoxLine, RiLogoutBoxLine} from "react-icons/ri";
import SidebarItem from "./Item";
import { motion } from "framer-motion"

const SideBar=()=>{
    return(
        <motion.div
            className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full rounded-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1,}}
            transition={{ duration: 1 }}
>
            <ul className="pl-4 h-2/4 flex flex-col justify-between">
                <motion.h1
                 className="text-center text-2xl font-bold text-gray-400 top-4"
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1,}}
                 transition={{ duration: 3, delay:3 }}
                 >LOGO</motion.h1>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:0.6}}
                    >
                    <SidebarItem><RiHome2Line url={"#"}/></SidebarItem>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:0.9}}
                    >
                    <SidebarItem><RiPercentLine url={"#"}/></SidebarItem>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:1.2}}
                    >
                    <SidebarItem><RiPieChartLine url={"#"}/></SidebarItem>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:1.5}}
                    >
                    <SidebarItem><RiMailOpenLine url={"#"}/></SidebarItem>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:1.8}}
                    >
                    <SidebarItem><RiSettings4Fill url={"#"}/></SidebarItem>
                </motion.div>
            </ul>
            <motion.div
             className="pl-8 mt-96 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors duration-300"
             initial={{ y: 100 }}
             animate={{ y: 0 }}
             transition={{ duration: 1.5, delay:2}}
             >
                    <a href="#" className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-300">
                        <div className="text-2xl text-center"><RiLoginBoxLine/></div>
                    </a>
            </motion.div>
        </motion.div>
    )
}


export default SideBar