import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookAppointment from "./pages/BookAppointment"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="min-w-xs">
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
