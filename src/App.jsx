import { useState } from 'react'
import Nav from './components/Nav'

import './App.css'


function App() {

  const [newProject, createProject] = useState({
    title: "Untitled",
    description: "Lorem Ipsum",
    image: "https://samuelkang.info/assets/illustrations/small/pearl.png"
  })

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    createProject((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div>
      <Nav />
      <form>
        <h2>Create Project</h2>
        <input
          type="text"
          name="title"
          value={newProject.name}
          onChange={handleFormChange}
          placeholder="Project name"
        />

        <textarea
          name="description"
          value={newProject.description}
          onChange={handleFormChange}
          placeholder="Start writing a description..."
        />
      </form>
    </div>

  )

}

export default App
