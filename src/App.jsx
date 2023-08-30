// Routes
import WelcomePage from "./components/WelcomePage"
import PtIndex from "./components/PtIndex"
import EnIndex from "./components/EnIndex"
import PtProjectsPage from "./components/PtProjectsPage"
import EnProjectsPage from "./components/EnProjectsPage"
import PtContactPage from "./components/PtContactPage"
import EnContactPage from "./components/EnContactPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
            <Route path="/pt/" element={<PtIndex />} />
              <Route path="/pt/projects" element={<PtProjectsPage />} />
              <Route path="/pt/contact" element={<PtContactPage />} />
            <Route path="/en/" element={<EnIndex />} />
              <Route path="/en/projects" element={<EnProjectsPage />} />
              <Route path="/en/contact" element={<EnContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
