import React from "react";

function ProjectCard({ title, description, image }) {

    return (
        <div className="card">
            <img className="project-image" src={image} alt="project-image" />
            <div className="content">
                <h3 className="project-title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>

    )
}

export default ProjectCard