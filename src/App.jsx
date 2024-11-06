import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Productos from "./components/Productos"
import Testimonios from "./components/Testimonios"
import Contacto from "./components/Contacto"
import NoPage from "./components/NoPage"
import Layout from "./components/Layout"

function App() {

  return (
    <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="testimonios" element={<Testimonios />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
