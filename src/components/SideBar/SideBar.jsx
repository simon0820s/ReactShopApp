import React, { useState } from "react";
import {RiHome2Line,RiPercentLine,RiPieChartLine,RiMailOpenLine,RiSettings4Fill,RiLoginBoxLine, RiLogoutBoxLine} from "react-icons/ri";
import SidebarItem from "./SidebarItem";
import { motion } from "framer-motion"

const SideBar=()=>{
    const [activeItem,setActiveItem]=useState('home')

    const handleActive=(item)=>{
        console.log(item)
        setActiveItem(item)
    }

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
                 transition={{ duration: 1.5, delay:1.5}}
                 >LOGO</motion.h1>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:0.6}}
                    onClick={()=>handleActive('home')}
                    >
                    <SidebarItem active={activeItem==='home'} ><RiHome2Line url={"#"}/></SidebarItem>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:0.9}}
                    onClick={()=>handleActive('per')}
                    >
                    <SidebarItem active={activeItem==='per'}><RiPercentLine url={"#"}/></SidebarItem>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:1.2}}
                    onClick={()=>handleActive('pie')}
                    >
                    <SidebarItem active={activeItem==='pie'}><RiPieChartLine url={"#"}/></SidebarItem>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:1.5}}
                    onClick={()=>handleActive('mail')}
                    >
                    <SidebarItem active={activeItem==='mail'}><RiMailOpenLine url={"#"}/></SidebarItem>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y: -200}}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1, delay:1.8}}
                    onClick={()=>handleActive('settings')}
                    >
                    <SidebarItem active={activeItem==='settings'} onClick={()=>handleActive('settings')}><RiSettings4Fill url={"#"}/></SidebarItem>
                </motion.div>
            </ul>
            <motion.div
             className="pl-8 mt-96 rounded-tl-xl rounded-bl-xl group transition-colors duration-300"
             initial={{ y: 100 }}
             animate={{ y: 0 }}
             transition={{ duration: 1.5, delay:2}}
             >
                    <a href="#" className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-500">
                        <div className="text-2xl text-center"><RiLoginBoxLine/></div>
                    </a>
            </motion.div>
        </motion.div>
    )
}


export default SideBar