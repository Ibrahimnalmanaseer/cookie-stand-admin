



import {createContext,useEffect,useState} from 'react';
import axios from 'axios'


export const AuthContext=createContext();

export default function AuthWrapper({children}){


    const[globalState,setGlobalState]=useState({

        tokens:localStorage.getItem('data')? localStorage.getItem('data'):null,
        login
    })




   function login(userInfo){

        
        const url='http://34.205.156.241:8000/api/token/'
        try {
        axios.post(url,userInfo).then((res)=>{

            setGlobalState({

                tokens:res.data,
                login
    
            })

            localStorage.setItem('data',res.data);
            
        })
        

        
    }catch(error) {
            console.error(error);
    }

    }
    

    

    
   


    return (


        <AuthContext.Provider value={globalState}>

            {children}

        </AuthContext.Provider>
    )



    }
        
    





