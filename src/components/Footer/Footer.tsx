import styled from 'styled-components';
import { FooterContainer, FooterIconButton, FooterIcon } from './FooterComponent';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIconButton>
        <FooterIcon src={`${process.env.PUBLIC_URL}/assets/images/Home.svg`} alt="Home Icon" />
        Home
      </FooterIconButton>
      <FooterIconButton>
        <FooterIcon src={`${process.env.PUBLIC_URL}/assets/images/heart.svg`} alt="Heart Icon" />
        Pick
      </FooterIconButton>
      <FooterIconButton>
        <FooterIcon
          src={`${process.env.PUBLIC_URL}/assets/images/gallery.svg`}
          alt="Gallery Icon"
        />
        Gallery
      </FooterIconButton>
      <FooterIconButton>
        <FooterIcon
          src={`${process.env.PUBLIC_URL}/assets/images/ranking.svg`}
          alt="Ranking Icon"
        />
        Ranking
      </FooterIconButton>
      <FooterIconButton>
        <FooterIcon src={`${process.env.PUBLIC_URL}/assets/images/list.svg`} alt="List Icon" />
        List
      </FooterIconButton>
    </FooterContainer>
  );
};

export default Footer;
