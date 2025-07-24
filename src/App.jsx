import { useState } from 'react'
import Nav from './components/Nav'
import ProjectList from './components/ProjectList'
import projectData from './project_data'

import './App.css'


function App() {

  const [projects, updateProjectData] = useState(projectData)
  const [searchTerm, setSearch] = useState("")
  const [newProject, createProject] = useState({
    title: "",
    description: "",
    image: "https://samuelkang.info/assets/illustrations/small/pearl.png"
  })

  const filteredProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleFormChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    createProject((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const addProject = (event) => {
    event.preventDefault();

    updateProjectData((prev) => {
      return [...prev, newProject]
    })

    console.log(projects)
  }


  return (
    <>
      <Nav />
      <main className="main">

        <form onSubmit={addProject}>
          <h2>Create Project</h2>
          <input
            type="text"
            name="title"
            value={newProject.title}
            onChange={handleFormChange}
            placeholder="Project name"
          />

          <textarea
            name="description"
            value={newProject.description}
            onChange={handleFormChange}
            placeholder="Start writing a description..."
          />
          <button type="submit">Add</button>

        </form>

        <section className="project-container">
          <div className="search-container">
            <input
              className='search-bar'
              type="text"
              placeholder='Search projects by title'
              value={searchTerm}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <ProjectList data={filteredProjects} />
        </section>
      </main>
    </>


  )

}

export default App
