'use client';



import {createContext,useState} from 'react';
import axios from 'axios'


export const AuthContext=createContext();

export default function AuthWrapper({children}){


    const[globalState,setGlobalState]=useState({

        tokens:null,
        login
    })




   async function login(userInfo){

        const url='http://34.205.156.241:8000/api/token/'

        const res= await axios.post(url,userInfo)
        
        setGlobalState({

            tokens:res.data,
            login

        })

    }
    

    return (


        <AuthContext.Provider value={globalState}>

            {children}

        </AuthContext.Provider>
    )



    }
        
    




