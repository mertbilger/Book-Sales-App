import Navbar from "./components/Navbar"
import Admin from "./pages/Admin";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext"
import Footer from "./components/footer";
import Toolbar from "./components/Toolbar";

function App() {
  const { admin } = useAuthContext()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/1YV1YV741ZWTifckheeb=gdarolrolgda" element={admin ? <Admin /> : <Login />} />
      </Routes>
      <Toolbar/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
