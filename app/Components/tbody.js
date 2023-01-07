

export default function TBody({records}){

        

        let total=0
        Object.keys(records).map((key)=>{
    
            total+=records[key]
            
        })
    
        return (<td  className="px-6 py-4" >{total}</td>)
    
            
    
                
        
    

}


