import styled from 'styled-components';
import GoogleFormBanner from 'components/Header/GoogleFormBanner';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #000;
  font-weight: 700;
  z-index: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <GoogleFormBanner />
      Dummy Data
    </HeaderContainer>
  );
};

export default Header;
