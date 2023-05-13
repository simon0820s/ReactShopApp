import React, { useState } from "react";

const SidebarItem = ({children,url,active}) => {

  return(

    active ?(
    <li className="p-4 rounded-tl-xl rounded-bl-xl bg-[#262837] group transition-colors duration-1000">
      <a href={url} className="inline-block p-4 box-content rounded-lg bg-[#ec7c6a] text-white transition-colors duration-1000">
        <div className="text-2xl text-center">{children}</div>
      </a>
    </li>
      ) : (
        <li className="p-4 rounded-tl-xl rounded-bl-xl group transition-colors duration-1000">
          <a href={url} className="inline-block p-4 box-content rounded-lg text-[#ec7c6a] transition-colors duration-1000">
            <div className="text-2xl text-center">{children}</div>
          </a>
        </li>
      )
  );
    
};

export default SidebarItem;