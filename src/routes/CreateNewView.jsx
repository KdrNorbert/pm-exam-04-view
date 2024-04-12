import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createView } from "../services/createView";

const initialValues = {
  name: "",
  settlement: "",
  address: "",
  category: "",
  price: 0
};

export default function CreateNewView() {

  const [formData, setFormData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateNewView = async (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.settlement === "" || formData.address === "" || formData.category === "" || formData.price <= 0) {
      return alert("Kérem töltsön ki minden mezőt")
    }
    try {
      setIsLoading(true);
      await createView(formData);
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      alert("Valami hiba történt az új látványosság mentésekor, kérem próbálja meg később!");
    }
  }

  return (
    <>
      <h1 className="text-white text-3xl font-semibold text-center mb-10">Látványosság hozzáadása</h1>
      <form onSubmit={handleCreateNewView} className="mx-auto h-5/6 w-2/5" noValidate>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Megnevezés</label>
          <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nemzeti Múzeum" />
        </div>
        <div className="mb-5">
          <label htmlFor="settlement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Település</label>
          <input value={formData.settlement} onChange={(e) => setFormData({ ...formData, settlement: e.target.value })} type="text" id="settlement" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kecskemét" />
        </div>
        <div className="mb-5">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cím</label>
          <input value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2100 Bikinifenék, Kocka utca 45" />
        </div>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategória</label>
        <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} id="countries" className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="" disabled>Válassz katóriát </option>
          <option value="múzeum">múzeum</option>
          <option value="étterem">étterem</option>
          <option value="építmény">építmény</option>
        </select>
        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ár</label>
          <input value={formData.price} onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })} type="number" min={0} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='5000' />
        </div>
        <button disabled={isLoading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {isLoading ? "Mentés folyamatban..." : "Mentés"}
        </button>
      </form>
    </>
  )
};
