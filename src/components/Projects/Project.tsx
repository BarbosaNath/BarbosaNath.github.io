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
    <div className="flex flex-col text-center mx-auto shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] shadow-gray-300 m-10 w-5/6 rounded-lg h-100 overflow-hidden pb-2 lg:flex-row lg:pb-0 xl:flex-col xl:w-1/3 xl:m-0 xl:pb-2">
      <img
        src={image}
        className="w-full h-48 md:h-60 lg:min-h-[70vh] lg:w-96 xl:w-full xl:max-h-20 xl:min-h-[30vh] object-cover "
      />

      <div className="flex flex-col justify-start items-center mx-auto my-4 lg:my-auto xl:my-4 gap-3">
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
