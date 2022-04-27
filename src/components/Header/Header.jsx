import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './Header.styled';
import Container from 'components/Container/Container';

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper>
          <Logo />
          Filmoteka
        </LogoWrapper>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/">Home</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
