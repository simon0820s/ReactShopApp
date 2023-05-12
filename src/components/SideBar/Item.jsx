import React from "react";

const SidebarItem = ({children,url}) => {
  return (
    <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors duration-300">
      <a href={url} className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors duration-300">
        <div className="text-2xl text-center">{children}</div>
      </a>
    </li>
  );
};

export default SidebarItem;