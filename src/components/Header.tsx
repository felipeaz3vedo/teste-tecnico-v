import Image from 'next/image';
import UserAvatar from '../assets/avatar.png';
import { BellIcon } from '../components/icons/BellIcon';
import { MoonIcon } from '../components/icons/MoonIcon';
import { InfoIcon } from '../components/icons/InfoIcon';
import { MagnifyGlassIcon } from '../components/icons/MagnifyGlassIcon';

export function Header() {
  return (
    <header
      className="
        flex
        items-start
        justify-between
        w-full
        max-h-[50px]
        mt-[49px]
        ml-[30px]
        mr-[22px]"
    >
      <div>
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
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none w-[214px] h-[41px]">
            <MagnifyGlassIcon />
          </div>
          <input
            className="
            block w-full
            p-[10px]
            pl-[42px]
            text-sm
          text-gray-900
            rounded-default
          bg-gray-50
          focus:ring-purple-700
          focus:border-purple-700
          placeholder:text-blue-100
            placeholder:tracking-tight"
            placeholder="Busca"
          />
        </div>

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
