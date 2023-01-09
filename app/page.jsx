"use client";

import { Inter } from "@next/font/google";
import CookieStandAdmin from "./components/CookieStandAdmin";
import { AuthContext } from "./contexts/auth";
import { useContext } from "react";
import Login from "./components/Login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {tokens}= useContext(AuthContext)

  return (
     
     
     
    
   

   tokens?<CookieStandAdmin/>:<Login/>
   
   
     
   
     
   
    
    
  );
}
