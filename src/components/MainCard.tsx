import clsx from 'clsx';
import { DollarIcon } from './icons/DollarIcon';

interface MainCardProps {
  color: 'orange' | 'purple' | 'green';
}

export function MainCard({ color }: MainCardProps) {
  const dolarIconColor = {
    orange: 'black',
    purple: 'purple',
    green: 'green',
  };

  return (
    <div
      className={clsx('min-w-[380px] max-h-[310px] rounded-3xl pt-[22px] pb-[26px]', {
        'bg-orange-500': color === 'orange',
        'bg-purple-300': color === 'purple',
        'bg-green-100': color === 'green',
      })}
    >
      <div className="px-4">
        <div
          className="
            flex
            items-center
            justify-center
            w-14
            h-14
            mb-[30px]
          bg-white
            rounded-full"
        >
          <DollarIcon color={dolarIconColor[color]} />
        </div>

        <p className="text-white text-5xl leading-8 tracking-tight font-bold mb-[18px]">
          R$ 312.321,00
        </p>

        <h2
          className="
          text-white
            text-2xl
            leading-6
            tracking-tight
            font-medium
            opacity-70
            mb-[31px]"
        >
          Receita total
        </h2>
      </div>

      <hr className="pb-[18px]" />

      <div className="px-4">
        <p className="text-white text-2xl leading-8 tracking-tight font-bold">R$ 67,20</p>

        <h3 className="text-white text-sm leading-6 tracking-tight font-medium opacity-70">
          Média por cliente
        </h3>
      </div>
    </div>
  );
}
