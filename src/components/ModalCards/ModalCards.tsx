import { Modal, Button } from 'flowbite-react';

interface ModalCardsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCards({ isOpen, onClose }: ModalCardsProps) {
  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Body>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Expanded Image"
            className="rounded-lg object-cover w-full h-64"
          />
          <h2 className="text-2xl font-bold text-black mt-4">
            Título do Card
          </h2>
          <p className="text-gray-700 text-xl">
            Esta é a descrição do card. Aqui você pode adicionar qualquer texto que desejar.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button color="gray" onClick={onClose}>
              Fechar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
