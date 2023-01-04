import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const location = event.target.location.value;
    const minCustomers = event.target.minCustomer.value;
    const maxCustomers = event.target.maxCustomer.value;
    const avgCookies = event.target.avgCookies.value;

    // Add the new data to the array
    setData([
      ...data,
      {
        location: location,
        minCustomers: minCustomers,
        maxCustomers: maxCustomers,
        avgCookies: avgCookies,
      },
    ]);
  }

  return (
    <div className="bg-slate-100 h-screen">
      <div className="flex flex-col bg-slate-200 w-full pt-28 items-center justify-center">
        <div className="form">
          <form
            className="bg-white rounded-md py-10 px-12 shadow-lg"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl mt-2 text-center font-semibold text-gray-600">
              Create Cookie Stand
            </h1>

            <div className="relative w-full mb-3 mt-8">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Location
              </label>
              <input
                name="location"
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Location"
              />
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="minCustomer"
                >
                  Minimum Customers per Hour
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="minCustomer"
                  type="number"
                  placeholder="min"
                />
              </div>
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="maxCustomer"
                >
                  Maximum Customers per Hour
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="maxCustomer"
                  type="number"
                  placeholder="max"
                />
              </div>
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="avgCookies"
                >
                  AVERAGE COOKIES PER SALE
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="avgCookies"
                  type="number"
                  placeholder="sale"
                />
              </div>

              

             

              
            </div>

            <div>
        <button
          class="hover:shadow-form rounded-md bg-slate-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>

            
          </form>

          {/* <section className="w-full pt-10 text-center shadow-lg shadow-black-50">
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <div>
                    <p
                      className="mt-6 bg-slate-400 p-6 rounded-md text-white-500 font-mono shadow-lg"
                      key={data[index]}
                    >{`{'location':'${item.location}', 'minCustomers':'${item.minCustomers}','maxCustomers':'${item.maxCustomers}','avgCookies':'${item.avgCookies}'}`}</p>
                  </div>
                );
              })}
          </section> */}
        </div>
      </div>
    </div>
  );
}
