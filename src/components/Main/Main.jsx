import propTypes from 'prop-types';
import { Main } from './Main.styled';
export default function MainContent({ children }) {
  return <Main>{children}</Main>;
}
Main.propTypes = {
  choldren: propTypes.node,
};
