import { Link } from 'react-router-dom';

export default function NavLink({ to, children }) {
  return (
    <Link to={to} className="hover:text-white text-xl">
      {children}
    </Link>
  );
}
