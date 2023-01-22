import { CartIcon } from './icons/CartIcon';
import { HomeIcon } from './icons/Home';
import { ProfileIcon } from './icons/ProfileIcon';
import { RelatoryIcon } from './icons/RelatoryIcon';
import { SquaresIcon } from './icons/SquaresIcon';

export function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col gap-5 ml-[34px] ">
        <li className="flex gap-[10px] items-center h-9 group cursor-pointer">
          <HomeIcon />
          <p className="text-base text-blue-50 font-medium group-hover:text-blue-800 transition">
            Dashboard
          </p>
        </li>

        <li className="flex gap-[10px] items-center h-9 group cursor-pointer">
          <CartIcon />
          <p className="text-base text-blue-50 font-medium group-hover:text-blue-800 transition">
            Vendas
          </p>
        </li>

        <li className="flex gap-[10px] items-center h-9 group cursor-pointer">
          <RelatoryIcon />
          <p className="text-base text-blue-50 font-medium group-hover:text-blue-800 transition">
            Relatórios
          </p>
        </li>

        <li className="flex gap-[10px] items-center h-9 group cursor-pointer">
          <SquaresIcon />
          <p className="text-base text-blue-50 font-medium group-hover:text-blue-800 transition">
            Lojas Parceiras
          </p>
        </li>

        <li className="flex gap-[10px] items-center h-9 group cursor-pointer">
          <ProfileIcon />
          <p className="text-base text-blue-50 font-medium group-hover:text-blue-800 transition">
            Clientes
          </p>
        </li>
      </ul>
    </nav>
  );
}
