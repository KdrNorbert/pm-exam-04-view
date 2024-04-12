import NavLink from './NavLink';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="px-40 flex items-center justify-between bg-gray-700 text-gray-400 h-14">
      <h1 className="text-white font-semibold text-xl">Látványosságok</h1>
      <div className="flex items-center justify-center gap-6">
        <NavLink to="/">Látványosságok</NavLink>
        <NavLink to="/createNewView">Új hozzáadása</NavLink>
      </div>
    </header>
  );
}
