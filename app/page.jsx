"use client";

import { Inter } from "@next/font/google";
import CookieStandAdmin from "./Components/CookieStandAdmin";
import Form from "./Components/Form";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<>
      <Form/>
      <CookieStandAdmin/>

      </>
    
  );
}
