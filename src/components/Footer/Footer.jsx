import { DeveloperData, FooterWrapper, Svg } from './Footer.styled';
// import Container from 'components/Container/Container';

function Footer() {
  return (
    <FooterWrapper>
      <DeveloperData>
        © 2022 | All Rights Reserved | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Ye2212"
        >
          <Svg />
        </a>
      </DeveloperData>
    </FooterWrapper>
  );
}

export default Footer;
