
'use client';


import React, {useState,createContext}from "react";

import ReportTable from "./ReportTable";

export const ClickContext = React.createContext();

export default function CookieStandAdmin() {
    
    const [clicked, setClicked] = useState(false);
    

    const handleClick = () => {
        setClicked(!clicked);
      };


  return (
    <ClickContext.Provider value={{ clicked, handleClick }}>
    <div >
  
    <button  className="hover:shadow-form rounded-md bg-slate-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={handleClick}> View Data</button>
    </div>
    
    <ReportTable/>
    </ClickContext.Provider>


  )
  
  
  
  


}
