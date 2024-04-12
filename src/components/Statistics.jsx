

export default function Statistics({ views }) {

    let places = [];
    let numOfViews = 0;
    let avgPrice = 0;

   
        for (let i = 0; i < views.length; i++) {
            if (i === 0) {
                places[views[i].settlement] = { numOfAllSettlemets: 1, fullPrice: views[i].price };
                numOfViews++;
                avgPrice += views[i].price;
            } else if (!Object.keys(places).includes(views[i].settlement)) {
                places[views[i].settlement] = { numOfAllSettlemets: 1, fullPrice: views[i].price };
                numOfViews++;
                avgPrice += views[i].price;
            } else if (Object.keys(places).includes(views[i].settlement)) {
                places[views[i].settlement].numOfAllSettlemets++;
                places[views[i].settlement].fullPrice += views[i].price;
                numOfViews++;
                avgPrice += views[i].price;
            }
        }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            TELEPÜLÉS
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            LÁTVÁNYOSSÁGOK
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            ÁTLAG ÁR
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(places).map(([key, value]) => (
                        <tr key={key} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                {key}
                            </th>
                            <td className="px-6 py-4 text-center">
                                {value.numOfAllSettlemets}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {value.fullPrice / value.numOfAllSettlemets}
                            </td>
                        </tr>
                    ))}
                    <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th scope="col" className="px-6 py-3">
                            ÖSSZEGZÉS
                        </th>
                        <td className="px-6 py-4 text-center">
                            {numOfViews && numOfViews}
                        </td>
                        <td className="px-6 py-4 text-center">
                            {numOfViews && Math.round(avgPrice / numOfViews)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
