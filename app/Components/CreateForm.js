import data from "./data";

import React, { useContext, useState} from "react";
import TBody from "./tbody";
import TFoot from "./tfoot";
import {ClickContext} from './CookieStandAdmin'


export default function CreateForm() {
  const [jsonData, setJsonData] = useState(data);
  const click=useContext(ClickContext)


 



 


  return (

    
    <div className="container flex justify-center mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">

          {click.clicked &&

            <table>
              <thead className="bg-gray-50">



                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Location</th>
                  <th className="px-6 py-2 text-xs text-gray-500">6am</th>
                  <th className="px-6 py-2 text-xs text-gray-500">7am</th>
                  <th className="px-6 py-2 text-xs text-gray-500">8am</th>
                  <th className="px-6 py-2 text-xs text-gray-500">9am</th>
                  <th className="px-6 py-2 text-xs text-gray-500">10am</th>
                  <th className="px-6 py-2 text-xs text-gray-500">11am</th>
                  <th className="px-6 py-2 text-xs text-gray-500">12pm</th>
                  <th className="px-6 py-2 text-xs text-gray-500">1pm</th>
                  <th className="px-6 py-2 text-xs text-gray-500">2pm</th>
                  <th className="px-6 py-2 text-xs text-gray-500">3pm</th>

                  <th className="px-6 py-2 text-xs text-gray-500">4pm</th>
                  <th className="px-6 py-2 text-xs text-gray-500">5pm</th>
                  <th className="px-6 py-2 text-xs text-gray-500">6pm</th>
                  <th className="px-6 py-2 text-xs text-gray-500">7pm</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Total</th>
                </tr>
              </thead>

                <tbody className="bg-white">

              
              
              
{jsonData &&
  jsonData.map((item) => {
    return (
      <tr className="whitespace-nowrap" key={item.id}>
        <td className="px-6 py-4">{item.location}</td>

        {Object.keys(item.time_sale).map((key) => {
          return (
            <td className="px-6 py-4">{item.time_sale[key]}</td>
          );
        })}

        <TBody records={item.time_sale} />
      </tr>
    );
  })}


<TFoot jsonData={jsonData} />

{/* </>
</ClickContext.Consumer> */}
</tbody>
              
              



                

            
              

            </table>
            }
            {!click.clicked && <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">no data</h1>}
          </div>
        </div>
      </div>

      
    </div>

    
  );
}
