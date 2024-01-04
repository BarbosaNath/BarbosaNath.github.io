import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import MatheusIMG from "/matheus.png";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex items-center justify-center gap-16 flex-col md:flex-row md:pb-20 md:pt-10 xl:pb-28 xl:pt-20 px-16 xl:px-60 2xl:px-80"
    >
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-80 h-80">
        <img src={MatheusIMG} className="m-auto" />
      </div>

      <div className="text-center md:w-1/2">
        <h2 className="text-5xl py2 text-teal-600 font-medium max-w-md mx-auto">
          Matheus Eduardo Barbosa de Sousa
        </h2>
        <h3 className="text-2xl py2">Desenvolvedor Front-End</h3>
        <p className="text-md py-5 leading-8 text-justify text-gray-800">
          Ola, tenho 21 anos e estou cursando Sistemas de Informação. Sou
          esforçado e sempre busco os melhores resultados. Possuo conhecimento
          intermediário em JavaScript, TypeScript, React e Python, tenho noções
          de design e possuo habilidade em matemática e suas aplicações, de
          forma simples e prática.
        </p>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
