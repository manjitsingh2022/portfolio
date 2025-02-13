import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import config from "../config"
import './App.css'
import Layout from './Layout'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'

// npm run build
// pro on github
// npm run deploy
// pro on netlify
// netlify deploy --prod 

function App() {


  const isGitHubPages = config.VITE_BASE_CI === true  && (config.VITE_GITHUB_REPO === "manjitsingh2022/portfolio")
 console.log(isGitHubPages,"isGitHubPages")
  const base = isGitHubPages ? '/portfolio/' : '/';
  console.log(base, 'appppppppp')
  return (
    <>
      <Router basename={`${base}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
