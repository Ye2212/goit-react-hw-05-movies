import { Route, Routes } from 'react-router-dom';
import MoviesPage from 'pages/MoviesPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
