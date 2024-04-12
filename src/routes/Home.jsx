import { useEffect, useState } from "react";
import readViews from "../services/readViews";
import Statistics from "../components/Statistics";
import Views from "../components/Views";

export default function Home() {

  const [views, setViews] = useState([]);

  useEffect(() => {
      readViews().then(setViews);
  }, []);

  return (
    <div>
      <h2 className="text-white text-3xl font-semibold text-center mb-10">Látványosságok</h2>
      <Views views={views} setViews={setViews} />
      <h2 className="text-white text-3xl font-semibold text-center my-10">Statisztikák</h2>
      <Statistics views={views} setViews={setViews} />
    </div>
  )
}
