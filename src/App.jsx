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
    createProject({
      title: "",
      description: "",
      image: "https://samuelkang.info/assets/illustrations/small/pearl.png"
    });
  }


  return (
    <>
      <Nav />
      <main className="main">

        <form id="add-project" onSubmit={addProject}>
          <h2>Create Project</h2>

          <label htmlFor="title">Title</label>
          <input
            required
            id="title"
            type="text"
            name="title"
            value={newProject.title}
            onChange={handleFormChange}
            placeholder="Project name"
          />

          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            name="description"
            value={newProject.description}
            onChange={handleFormChange}
            placeholder="Start writing a description..."
          />
          <button aria-label="Add project" type="submit">Add</button>

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
          {filteredProjects.length === 0 ? (
            <p className="empty-state">No projects found.</p>
          ) : (
            <ProjectList data={filteredProjects} />
          )}
        </section>
      </main>
    </>


  )

}

export default App
