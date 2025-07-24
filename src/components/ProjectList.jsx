import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ data }) {

    return (
        <> 
        
        < div className="project-list" >
            {data.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image} />
            ))
            }
        </div >
        </>

    )
}

export default ProjectList