import { Card } from 'flowbite-react';
import { MouseEventHandler } from 'react';

interface CustomCardsProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export function CustomCards({ onClick }: CustomCardsProps) {
  return (
    <div className="max-w-sm pb-5">
      <Card>
        <div className="relative">
          <img
            src="https://via.placeholder.com/150x200"
            alt="Sample Image"
            className="rounded-t-lg w-full"
          />
          <div
            className="p-4 cursor-pointer"
            onClick={onClick}
          >
            <h2 className="text-2xl font-bold text-black text-center pb-2">
              Título do Card
            </h2>
            <p className="text-gray-700">
              Descrição do card. Aqui você pode adicionar qualquer texto que desejar.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
