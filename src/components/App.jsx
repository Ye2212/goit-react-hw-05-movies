import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import MainContent from './Main/Main';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

// import NotFoundPage from '../pages/NotFoundPage';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
