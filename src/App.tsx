import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import BookAppointment from "./pages/BookAppointment"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import AboutUs from "./pages/AboutUs"
import DiagnosticTests from "./pages/services/DiagnosticTests"

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-w-xs">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="book-appointment" element={<BookAppointment />} />
            <Route path="services">
              <Route path="diagnostic-tests" element={<DiagnosticTests />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
