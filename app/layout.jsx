"use client";
import "./globals.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
         
          <Header />
        </header>

        <main class="static ...">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
