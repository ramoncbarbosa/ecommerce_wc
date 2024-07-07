import React from 'react';
import { Card } from 'flowbite-react';

export function CustomCards() {
  return (
    <div className="max-w-sm no-underline">
      <Card className="border border-gray-300 shadow-lg rounded-lg ">
        <div className="w-full h-64 flex items-center justify-center overflow-hidden">
          <img
            src="https://via.placeholder.com/150x200"
            alt="Sample Image"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="p-5 no-underline">
          <h2 className="text-2xl font-bold text-black py-2 ">
            Título do Card
          </h2>
          <p className="text-gray-700 text-xl no-underline">
            Esta é a descrição do card. Aqui você pode adicionar qualquer texto que desejar.
          </p>
        </div>
      </Card>
    </div>
  );
}
