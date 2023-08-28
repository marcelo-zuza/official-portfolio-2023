// Routes
import WelcomePage from "./components/WelcomePage"
import PtIndex from "./components/PtIndex"
import EnIndex from "./components/EnIndex"
import PtProjectsPage from "./components/PtProjectsPage"
import EnProjectsPage from "./components/EnProjectsPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/official-portfolio-2023/" element={<WelcomePage />} />
            <Route path="/official-portfolio-2023/pt/" element={<PtIndex />} />
              <Route path="/official-portfolio-2023/pt/projects" element={<PtProjectsPage />} />
            <Route path="/official-portfolio-2023/en/" element={<EnIndex />} />
              <Route path="/official-portfolio-2023/en/projects" element={<EnProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
