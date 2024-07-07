import { useState } from 'react';
import { CustomCards } from '../CustomCards/CustomCards';
import { ModalCards } from '../ModalCards/ModalCards';
import { Header } from '../Header/Header';
import { FooterComponent } from '../FooterComponent/FooterComponent';

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Header/>
      <CustomCards onClick={handleOpenModal} />
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg ${
          modalOpen ? 'block' : 'hidden'
        }`}
      >
        <ModalCards isOpen={modalOpen} onClose={handleCloseModal} />
      </div>
      <FooterComponent/>
    </main>
  );
}
