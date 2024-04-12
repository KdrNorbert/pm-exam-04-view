import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main className="mx-40 py-10">
        <Outlet />
      </main>
    </div >
  );
}
