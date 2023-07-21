import styled from 'styled-components';
import GoogleFormBanner from 'components/Header/GoogleFormBanner';

const HeaderCon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 150px;
  color: black;
  font-weight: bold;
  z-index: 2;
`;

const Header: React.FC = () => {
  return (
    <HeaderCon>
      <GoogleFormBanner />
      Dummy Data
    </HeaderCon>
  );
};

export default Header;
