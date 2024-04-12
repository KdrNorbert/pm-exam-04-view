import { useState } from "react";
import deleteView from "../services/deleteView";


export default function Views({ views, setViews }) {

    const [isLoading, setIsLoading] = useState(false);
    const [deletingView, setDeletingView] = useState("");

    const handleDelete = async (id) => {
        try {
            setIsLoading(true);
            setDeletingView(id);
            await deleteView(id)
            setIsLoading(false);
            setDeletingView("");

        } catch (err) {
            alert('Cannot delete element with id of ' + id);
            return console.log(err);
        }
        setViews(views.filter((current) => current.id !== id))
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            MEGNEVEZÉS
                        </th>
                        <th scope="col" className="px-6 py-3">
                            TELEPÜLÉS
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CÍM
                        </th>
                        <th scope="col" className="px-6 py-3">
                            KATEGÓRIA
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ÁR
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {views.map(({ id, name, settlement, address, category, price }) => (
                        <tr key={id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {name}
                            </th>
                            <td className="px-6 py-4">
                                {settlement}
                            </td>
                            <td className="px-6 py-4">
                                {address}
                            </td>
                            <td className="px-6 py-4">
                                {category}
                            </td>
                            <td className="px-6 py-4">
                                {price}
                            </td>
                            <td>
                                {isLoading && deletingView === id ? (
                                    < div role="status">
                                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>

                                )
                                :
                                <button onClick={() => handleDelete(id)} className="px-6 py-4 text-blue-500 font-semibold">Törlés</button>
                            }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}