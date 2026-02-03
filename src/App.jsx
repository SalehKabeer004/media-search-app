import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import CollectionPage from "./pages/CollectionPage.jsx"
import { ToastContainer, Bounce, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/NavBar.jsx"
import SearchBar from "./components/SearchBar.jsx"
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white w-full' >
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  )
}

export default App