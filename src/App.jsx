
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold mb-4">
        Olá, eu sou o Arthur 👋
      </motion.h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Sou um desenvolvedor Back-End apaixonado por tecnologia. Este é meu portfólio moderno feito com React + TailwindCSS.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-2xl hover:text-blue-500"><FaGithub /></a>
        <a href="#" className="text-2xl hover:text-blue-500"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default App;
