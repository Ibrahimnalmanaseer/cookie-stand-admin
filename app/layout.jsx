"use client";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import React from "react";
import ThemeWrapper from "./contexts/theme";
import LoginWrapper from './contexts/auth';



export default function RootLayout({ children }) {

  



  
  return (


    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <LoginWrapper> 
      <ThemeWrapper>
      
     
        <body>


          <header>
          
            <Header />
            
          </header>
         
          <main className="static ...">{children}</main>
          
          <footer>
            <Footer />
          </footer>

        
        </body>
       
        
        </ThemeWrapper>
        </LoginWrapper>
        
    </html>
    
  );
}
