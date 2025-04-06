import React from 'react';

export default function Contact() {
    return (
      <section className="py-16 px-4 md:px-20 bg-dark-blue text-white text-center">
        <h2 className="text-3xl font-semibold text-light-blue mb-6">Contato</h2>
        <p className="mb-4">Entre em contato por e-mail ou pelas redes sociais:</p>
        <div className="space-y-2">
          <p><strong>Email:</strong> arthurf43213@email.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/arthurf4321" className="text-blue-400 hover:underline">github.com/arthurf4321</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/arthur-felipe-882740345/?trk=opento_sprofile_goalscard" className="text-blue-400 hover:underline">linkedin.com/in/arthur-felipe</a></p>
        </div>
      </section>
    );
  }
  