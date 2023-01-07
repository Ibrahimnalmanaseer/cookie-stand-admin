
import CreateForm from "./CreateForm";
import React, { useContext, useState} from "react";
import {ClickContext} from './CookieStandAdmin'

export default function ReportTable(){

    const click=useContext(ClickContext)

    return (

        <>
        {click.clicked &&<CreateForm/>}
        <div className='content-center align-items: center' >
        {!click.clicked && <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">No data</h1>}
        </div>
        </>

    )

}