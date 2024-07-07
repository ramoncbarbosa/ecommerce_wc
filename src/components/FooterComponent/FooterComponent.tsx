import React from 'react';
import { Footer } from 'flowbite-react';

export function FooterComponent() {
  return (
    <Footer container className="py-8 px-4 bg-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <p></p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end">
          <Footer.Link href="#" className="mx-2">
            Contact
          </Footer.Link>
        </div>
      </div>
    </Footer>
  );
}
