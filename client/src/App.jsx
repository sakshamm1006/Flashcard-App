import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Generate from "./pages/Generate"
import Study from "./pages/Study"
import Browse from "./pages/Browse"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Register from "./pages/Register"

function HomeWrapper() {
  const navigate = useNavigate()
  return <Home onStart={() => navigate("/generate")} />
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <div className="pt-24">
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomeWrapper /></Layout>} />
        <Route path="/generate" element={<Layout><Generate /></Layout>} />
        <Route path="/study" element={<Layout><Study /></Layout>} />
        <Route path="/browse" element={<Layout><Browse /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App