import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
// import NotFoundPage from '../pages/NotFoundPage';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Header />

      {/* <div style={{ height: '100vh' }}> */}
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer />
      </div> */}
    </>
  );
}

export default App;
