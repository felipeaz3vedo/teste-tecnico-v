import Image from 'next/image';
import { ReactNode } from 'react';

import PexLogo from '../assets/pex-logo.svg';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-full h-full">
      <aside className="sticky top-0 flex flex-col min-w-[18.125rem] h-screen bg-white">
        <Image
          className="mb-5 ml-[34px] mt-[27px]"
          src={PexLogo}
          alt="Logomarca da Pex"
          width={153}
          height={83}
          quality={100}
          priority
        />

        <hr className="bg-blue-50 mb-[2.375rem]" />

        <Navbar />
      </aside>

      <>{children}</>
    </div>
  );
}
