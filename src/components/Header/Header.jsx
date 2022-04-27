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
          <LogoWrapper>
            <Logo />
            Filmoteka
          </LogoWrapper>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/">Movies</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </HeaderWrapper>
  );
}

export default Header;
