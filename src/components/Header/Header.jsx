import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './Header.styled';

function Header() {
  return (
    <HeaderWrapper>
      <NavigationList>
        <NavigationItem>
          <Link to="/">
            <LogoWrapper>
              <Logo />
              Filmoteka
            </LogoWrapper>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </HeaderWrapper>
  );
}

export default Header;
