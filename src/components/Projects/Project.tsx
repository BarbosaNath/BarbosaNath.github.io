import { FC } from "react";
import { AiOutlineExport, AiFillGithub } from "react-icons/ai";

const Project: FC<ProjectType> = ({
  name,
  image,
  description,
  tools,
  links,
}) => {
  return (
    <div className="flex flex-col md:flex-row text-center mx-auto shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] shadow-gray-300 m-10 w-5/6 rounded-lg min-h-[70vh] overflow-hidden">
      <img
        src={image}
        className="w-full h-48 md:min-h-[70vh] md:w-96 object-cover "
      />

      <div className="flex flex-col justify-center items-center m-auto gap-8">
        <h1 className="text-3xl text-teal-600">{name}</h1>
        <p className="text-md px-10 leading-8 text-gray-800">{description}</p>

        <p className="text-gray-600">Ferramentas Utilizadas</p>

        <div className="flex justify-center gap-10 text-gray-600">
          {tools.map((tool) => (
            <a>{tool}</a>
          ))}
        </div>

        <div className="text-4xl flex justify-center gap-10 text-gray-600">
          {links &&
            links.map((link) => {
              return (
                <a href={link.link} target="_blank">
                  {link.type === "github" ? (
                    <AiFillGithub />
                  ) : (
                    <AiOutlineExport />
                  )}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Project;
