import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
// import NotFoundPage from '../pages/NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Footer from './Footer/Footer';
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
