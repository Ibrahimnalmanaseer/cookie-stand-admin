'use client';
import CreateForm from "./CreateForm";
import React, { useContext, useState} from "react";
import {ThemeContext} from '../contexts/theme';




export default function ReportTable(){

    const {clicked}=useContext(ThemeContext) 

    return (

        <>
        {clicked &&<CreateForm/>}
        <div className='content-center align-items: center dark:bg-slate-800' >
        {!clicked && <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 dark:text-slate-400">No data</h1>}
        </div>
        </>

    )

}