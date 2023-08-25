// Routes
import WelcomePage from "./components/WelcomePage"
import PtIndex from "./components/PtIndex"
import EnIndex from "./components/EnIndex"
import PtNavbar from "./components/PtNavbar"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
            <Route path="/pt/" element={<PtIndex />} />
            <Route path="/en/" element={<EnIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
