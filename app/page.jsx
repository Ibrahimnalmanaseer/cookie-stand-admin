"use client";

import { Inter } from "@next/font/google";
import CookieStandAdmin from "./components/CookieStandAdmin";
import { AuthContext } from "./contexts/auth";
import { useContext } from "react";
import Login from "./components/Login";
const inter = Inter({ subsets: ["latin"] });
const {tokens}= useContext(AuthContext)
export default function Home() {
  return (
     
     
     
    
     
    !tokens && <Login/>
     
    
     
   
    
    
  );
}
