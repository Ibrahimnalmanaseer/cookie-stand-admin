export default function TFoot({jsonData}){

    let result={}

    jsonData &&jsonData.map((item) => {
        let sale = item.time_sale;

        Object.keys(sale).map((key) => {
          if (result[key]) {
            result[key] += sale[key];
          } else {
            result[key] = sale[key];
          }
          
        });



        

      })

       
        
    Object.keys(result).map((key)=>{
    
        return <td className="px-6 py-4" >{result[key]}</td>
            
        })
    
        
    
            
    
                
        
    }


