import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";

const projetos = [
  {
    titulo: "Sistema para loja de açaí",
    descricao: "TCC - Sistema completo para gerenciamento de pedidos, usuários e controle de produção.",
    imagem: "/acai-project.png",
    detalhes: "Esse sistema foi desenvolvido em PHP com MySQL e divide os setores da loja entre caixa, preparador e gerente.",
  },
  {
    titulo: "Automação com PyAutoGUI",
    descricao: "Projeto com Python que automatiza tarefas no computador.",
    imagem: "/pyautogui-project.png",
    detalhes: "Utiliza a biblioteca PyAutoGUI para simular ações humanas como cliques, teclas e movimentação do mouse.",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-b from-dark-blue to-blue-900">
      <h2 className="text-3xl font-semibold text-light-blue mb-10 text-center">Projetos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projetos.map((projeto, index) => (
          <motion.div
            key={index}
            className="bg-blue-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={projeto.imagem} alt={projeto.titulo} className="rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-blue-300">{projeto.titulo}</h3>
            <p className="text-blue-100 mt-2">{projeto.descricao}</p>
            <button
              onClick={() => setSelected(projeto)}
              className="mt-4 text-blue-400 hover:underline"
            >
              Ver mais
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-dark-blue p-6 rounded-xl max-w-lg w-full text-white relative">
            <h3 className="text-2xl font-bold text-light-blue mb-2">{selected.titulo}</h3>
            <p>{selected.detalhes}</p>
            <button
              className="absolute top-3 right-4 text-blue-400 hover:text-blue-200"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}