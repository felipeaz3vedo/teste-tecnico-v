import Image from 'next/image';
import UserAvatar from '../assets/avatar.png';
import { BellIcon } from '../components/icons/BellIcon';
import { MoonIcon } from '../components/icons/MoonIcon';
import { InfoIcon } from '../components/icons/InfoIcon';
import { Input } from './Input';

export function Header() {
  return (
    <header
      className="
        flex
        items-start
        justify-between
        mt-[49px]
        mb-5
       "
    >
      <div className="ml-[10px]">
        <p className="text-blue-300 text-sm leading-6 font-medium mb-[2px]">
          Principal / Dashboard
        </p>
        <h1 className="text-blue-800 text-[34px] leading-[42px] tracking-tight font-bold">
          Velty Dashboard
        </h1>
      </div>

      <div
        className="
          flex items-center
          gap-5 p-[10px]
          max-w-[422px]
          mt-4
        bg-white
          rounded-default
          shadow-default"
      >
        <Input type="search" placeholder="Buscar" />

        <BellIcon />
        <MoonIcon fill={'default'} />
        <InfoIcon />

        <Image
          src={UserAvatar}
          alt="Avatar do usuário"
          width={41}
          height={41}
          quality={100}
        />
      </div>
    </header>
  );
}
