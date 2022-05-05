import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
