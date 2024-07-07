import React from 'react';
import { Footer } from 'flowbite-react';
import { FaWhatsapp } from "react-icons/fa";

export function FooterComponent() {
  return (
    <Footer container className="py-8 px-4 bg-gray-200">
      <div className="flex flex-row md:flex-row items-center justify-center md:justify-start">
        <div className="mb-4 md:mb-0">
          <p></p>
        </div>
        <Footer.Link href="#" className="flex items-center no-underline text-xl">
          <span className="flex items-center">
            WhatsApp:
            <FaWhatsapp className="ml-1 text-2xl"/>
          </span>
        </Footer.Link>
      </div>
    </Footer>
  );
}
