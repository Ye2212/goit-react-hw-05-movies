import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';
import MainContent from './Main/Main';
// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
import Loader from '../components/Loader/Loader';
import Footer from './Footer/Footer';
// import NotFoundPage from '../pages/NotFoundPage';
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
