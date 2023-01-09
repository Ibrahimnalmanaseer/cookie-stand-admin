export default function TBody({ jsonData }) {
  
  return (
    jsonData &&
    jsonData.map((item) => {
      let total = 0;
      return (
        <tr
          className="whitespace-nowrap dark:bg-slate-600 dark:text-white"
          key={item.id}
        >
          <td className="px-6 py-4">{item.location}</td>

          {Object.keys(item.time_sale).map((key) => {
            {
              total += item.time_sale[key];
            }

            return <td className="px-6 py-4">{item.time_sale[key]}</td>;
          })}
          <td className="px-6 py-4">{total}</td>
        </tr>
      );
    })
  );
}

