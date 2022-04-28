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
    </HeaderWrapper>
  );
}

export default Header;
