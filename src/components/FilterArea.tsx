import { Input } from './Input';

export function FilterArea() {
  return (
    <div
      className="
        flex
        items-center
        gap-[52px]
        max-w-[644px]
        pl-[30px]
        pr-[16px]
        py-[10px]
        mb-[83px]
        bg-white
        rounded-default"
    >
      <p className=" text-blue-300 text-sm leading-6 font-medium">Filtrar por data</p>

      <div className="flex gap-[19px]">
        <Input type="filter" placeholder="Data inicial" />
        <Input type="filter" placeholder="Data final" />
      </div>
    </div>
  );
}
