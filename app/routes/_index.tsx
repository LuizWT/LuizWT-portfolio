import type { MetaFunction } from "@remix-run/node";
import { motion } from "motion/react";
import Experience from "~/components/experience";
import Projects from "~/components/projects";
import Skills from "~/components/skills";

export const meta: MetaFunction = () => {
  return [
    { title: "LuizWT" }, // coloque seu nome se quiser
    {
      name: "Portfolio",
      content: "Bem-vindos ao meu portfolio.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="flex flex-col min-h-[100dvh] z-10">
        {/* conteudo principal do seu portfolio */}
        <section
          id="hero"
          className="h-screen flex flex-col items-center justify-center gap-16 py-20"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl">Hello World.</h1>
                <h1 className="text-4xl">
                  I'm{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Luiz Felipe.
                  </span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <span className="text-gray-400">Python | Cybersegurança</span>
                <p className="text-gray-400 w-full sm:w-96 mt-4">
                  Um <b>programador</b> com foco em <b>Cibersegurança</b>.
                  Buscando uma posição desafiadora na área de tecnologia ou áreas correlatas, onde posso aplicar meus conhecimentos como sistemas operacionais, Office 365, defesa cibernética, automação, etc. Podendo contribuir para a produtividade, proteção de sistemas e redes corporativas.
                </p>

                {/* Botão de Download do CV */}
                <motion.a
                  href="/curriculo_Luiz_Felipe.pdf" // Altere para o caminho correto do seu CV
                  download="LuizFelipe_CV.pdf"
                  className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12v8h16v-8M12 16V4m0 0l-4 4m4-4l4 4"
                    />
                  </svg>
                  Download CV
                </motion.a>
              </motion.div>

            </div>

            <motion.img
              src="/luizFelipe.jpg"
              className="rounded-full w-52 h-52 sm:w-[30.5rem] sm:h-[30.5rem]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>


          {/* elemento decorativo */}
          <motion.div
            className="p-15 hidden flex-col items-center sm:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div 
              className="w-3 h-16 animate-pulse bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              style={{
                clipPath: 'polygon(30% 0, 70% 0, 100% 70%, 50% 100%, 0 70%)',
                WebkitClipPath: 'polygon(30% 0, 70% 0, 100% 70%, 50% 100%, 0 70%)'
              }}
            ></div>
          </motion.div>
        </section>

        {/* sessao de skills e experiencia altere para suas skills e experiencia no componente skills.tsx e experience.tsx*/}
        <motion.section
          id="skills"
          className=" flex flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl text-center">Habilidades e experiência</h1>

          <div className="flex flex-col gap-28">
            {/* componente de skills */}
            <Skills />

            {/* componente de experiencia */}
            <Experience />
          </div>
        </motion.section>

        {/* sessao onde voce vai descrever sobre seus projetos altere seus projetos no componente de projects.tsx */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          id="projects"
          className="mt-20 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl">Projetos</h1>

          <Projects />
        </motion.section>
      </div>
    </div>
  );
}
