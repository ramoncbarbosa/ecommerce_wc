import { Card } from 'flowbite-react';

export function CustomCards() {
  return (
    <div className="max-w-sm no-underline">
      <Card className="border border-gray-300 shadow-lg rounded- ">
        <div className="w-full h-64 flex items-center justify-center overflow-hidden">
          <img
            src="https://via.placeholder.com/150x200"
            alt="Sample Image"
            className="rounded-s-sm object-cover w-full h-full"
          />
        </div>
        <div className="px-5 pr-5">
          <h2 className="text-2xl font-bold text-black">
            Título do Card
          </h2>
          <p className="text-gray-700 text-xl py-2">
            Esta é a descrição do card. Aqui você pode adicionar qualquer texto que desejar.
          </p>
        </div>
      </Card>
    </div>
  );
}
