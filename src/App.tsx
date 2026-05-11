import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookAppointment from "./pages/BookAppointment"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <Router>
      <div className="min-w-xs">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book-appointment" element={<BookAppointment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
