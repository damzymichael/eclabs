import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import BookAppointment from "./pages/BookAppointment"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import AboutUs from "./pages/AboutUs"

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
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
