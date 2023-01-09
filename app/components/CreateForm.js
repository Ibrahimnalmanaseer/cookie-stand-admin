import data from "./data";

import React, { useContext, useState } from "react";
import TBody from "./tbody";
import TFoot from "./tfoot";

export default function CreateForm() {
  const [jsonData, setJsonData] = useState(data);

  return (
    <div className="container flex justify-center mx-auto dark:bg-slate-800 ">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table >
              <thead className="bg-gray-50">
                <tr className="dark:bg-slate-800">
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
             
                <TBody jsonData={jsonData} />
                <TFoot jsonData={jsonData} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
