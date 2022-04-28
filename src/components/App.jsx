import { Route, Routes } from 'react-router-dom';
import MoviesPage from 'pages/MoviesPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from 'pages/HomePage';
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
