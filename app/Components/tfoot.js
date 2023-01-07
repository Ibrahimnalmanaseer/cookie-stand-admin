export default function TFoot({ jsonData }) {
  let result = {};
  let total=0
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

  return (
    <tr className="whitespace-nowrap">
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
