import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3.5rem;
  padding: 0.3rem;
  z-index: 2;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const FooterIconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 20%;
  font-size: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.fontPrimary};
`;

const FooterIcon = styled.img`
  width: 100%;
  height: 65%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIconContainer>
        <FooterIcon src={`${process.env.PUBLIC_URL}/assets/images/Home.svg`} alt="Home Icon" />
        Home
      </FooterIconContainer>
      <FooterIconContainer>
        <FooterIcon src={`${process.env.PUBLIC_URL}/assets/images/heart.svg`} alt="Heart Icon" />
        Pick
      </FooterIconContainer>
      <FooterIconContainer>
        <FooterIcon
          src={`${process.env.PUBLIC_URL}/assets/images/gallery.svg`}
          alt="Gallery Icon"
        />
        Gallery
      </FooterIconContainer>
      <FooterIconContainer>
        <FooterIcon
          src={`${process.env.PUBLIC_URL}/assets/images/ranking.svg`}
          alt="Ranking Icon"
        />
        Ranking
      </FooterIconContainer>
      <FooterIconContainer>
        <FooterIcon src={`${process.env.PUBLIC_URL}/assets/images/list.svg`} alt="List Icon" />
        List
      </FooterIconContainer>
    </FooterContainer>
  );
};

export default Footer;
