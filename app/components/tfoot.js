export default function TFoot({ jsonData }) {
  let result = {};
  
  jsonData &&
    jsonData.map((item) => {
      
      let sale = item.time_sale;

      Object.keys(sale).map((key) => {
        if (result[key]) {
          result[key] += sale[key];
        } else {
          result[key] = sale[key];
        }
      });
    });
    let total=0
  return (
    
    <tr className="whitespace-nowrap dark:bg-slate-600 dark:text-white">
      <td className="px-6 py-4">Total</td>
      {Object.keys(result).map((key) => (


        <td className="px-6 py-4" key={key}>{result[key]}</td>
      ))}
    
      
      {Object.keys(result).map((key)=>{
    
            total+=result[key]
            
        })


    
      }
        <td className="px-6 py-4">{total}</td>    
    </tr>
  );
}
