import { FC, ReactNode } from "react";

const Projects:FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="xl:flex xl:flex-wrap gap-10 justify-center">
      {children}
    </div>
  )
}

export default Projects
