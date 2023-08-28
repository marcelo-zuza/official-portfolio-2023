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
          <Route path="/" element={<WelcomePage />} />
            <Route path="/pt/" element={<PtIndex />} />
              <Route path="/pt/projects" element={<PtProjectsPage />} />
            <Route path="/en/" element={<EnIndex />} />
              <Route path="/en/projects" element={<EnProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
