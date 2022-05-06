import propTypes from 'prop-types';
import { Main } from './MainContent.styled';
import { Outlet } from 'react-router-dom';
export default function MainContent() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}
MainContent.propTypes = {
  choldren: propTypes.node,
};
