"use client";

import { Inter } from "@next/font/google";
import CookieStandAdmin from "./components/CookieStandAdmin";
import Form from "./components/Form";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<>
      <Form/>
      <CookieStandAdmin/>

      </>
    
  );
}
