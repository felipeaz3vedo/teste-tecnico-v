import { CartIcon } from './icons/CartIcon';
import { HomeIcon } from './icons/Home';
import { ProfileIcon } from './icons/ProfileIcon';
import { RelatoryIcon } from './icons/RelatoryIcon';
import { SquaresIcon } from './icons/SquaresIcon';

export function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col gap-5 ml-[34px] ">
        <li className="nav-list-item group">
          <HomeIcon />
          <p className="nav-list-text">Dashboard</p>
        </li>

        <li className="nav-list-item group">
          <CartIcon />
          <p className="nav-list-text">Vendas</p>
        </li>

        <li className="nav-list-item group">
          <RelatoryIcon />
          <p className="nav-list-text">Relatórios</p>
        </li>

        <li className="nav-list-item group">
          <SquaresIcon />
          <p className="nav-list-text">Lojas Parceiras</p>
        </li>

        <li className="nav-list-item group">
          <ProfileIcon />
          <p className="nav-list-text">Clientes</p>
        </li>
      </ul>
    </nav>
  );
}
