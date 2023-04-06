import { DollarIcon } from './icons/DollarIcon';

function SmallCard() {
  return (
    <div
      className="
        flex-1
        max-w-[249px]
        rounded-3xl
        pt-[11px]
        pb-[8px]
        px-[22px]
      bg-white"
    >
      <h3 className="text-sm font-medium leading-5 tracking-tight text-blue-50">Clientes Ativos</h3>

      <p className="mb-[2px] text-2xl font-bold leading-8 tracking-tight text-blue-800">3.312</p>

      <p className="text-xs font-bold leading-5 tracking-tight text-green-300">+2,6% (+12)</p>
    </div>
  );
}

function MediumCard() {
  return (
    <div className="flex-1 max-w-[387px] rounded-3xl py-[20px] px-[16px] bg-white">
      <div
        className="
            flex
            items-center
            justify-center
            w-14
            h-14
            mb-4
            rounded-full
            bg-gray-50"
      >
        <DollarIcon color="blue" />
      </div>

      <p className="mb-[2px] text-[34px] font-bold leading-8 tracking-tight text-blue-800">
        312.321
      </p>

      <h3 className="mb-[10px] text-sm font-medium leading-5 tracking-tight text-blue-50">
        Cotações Realizadas
      </h3>

      <p className="text-xs font-bold leading-5 tracking-tight text-green-300">+15,3% (+223)</p>
    </div>
  );
}

export function TableCard() {
  return (
    <div className="min-w-[516px] bg-white pt-[23px] pb-[39px] rounded-3xl">
      <h3 className="ml-[31px] text-2xl leading-6 tracking-tight font-bold  text-blue-800">
        Planos
      </h3>

      <p className="ml-[31px] mb-[25px] text-sm leading-6 tracking-tight font-medium text-blue-50">
        123 planos ativos
      </p>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="border-b border-b-gray-100 ">
            <tr>
              <th className="table-head">clube</th>
              <th className="table-head">clientes</th>
              <th className="table-head">preços</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="table-data pt-4">Estagiários</td>
              <td className="table-data pt-4">312 clientes</td>
              <td className="table-data pt-4">R$ 123,90</td>
            </tr>

            <tr>
              <td className="table-data pt-[23px]">Diretoria</td>
              <td className="table-data pt-[23px]">312 clientes</td>
              <td className="table-data pt-[23px]">R$ 123,90</td>
            </tr>

            <tr>
              <td className="table-data pt-[23px]">Geral</td>
              <td className="table-data pt-[23px]">312 clientes</td>
              <td className="table-data pt-[23px]">R$ 123,90</td>
            </tr>

            <tr>
              <td className="table-data pt-[23px]">Almoxarifado</td>
              <td className="table-data pt-[23px]">312 clientes</td>
              <td className="table-data pt-[23px]">R$ 123,90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const Card = {
  Small: SmallCard,
  Medium: MediumCard,
  Table: TableCard,
};
