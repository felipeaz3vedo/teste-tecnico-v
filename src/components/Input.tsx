import { MagnifyGlassIcon } from './icons/MagnifyGlassIcon';
import { SquaresIcon } from './icons/SquaresIcon';
import { SquaresIconFilter } from './icons/SquaresIconFilter';

interface InputProps {
  type: 'search' | 'filter';
  placeholder: 'Buscar' | 'Data inicial' | 'Data final';
}

export function Input({ type, placeholder }: InputProps) {
  return (
    <div className="relative flex items-center  ">
      <div
        className={`input-icon
        ${type === 'search' ? 'pl-5' : 'pl-[22px]'}
        `}
      >
        {type === 'search' ? <MagnifyGlassIcon /> : <SquaresIconFilter />}
      </div>
      <input
        className={`input
        ${type === 'search' ? 'pl-[42px]' : 'pl-[42px]'}
`}
        placeholder={placeholder}
      />
    </div>
  );
}
