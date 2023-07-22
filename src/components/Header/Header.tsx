import styled from 'styled-components';
import GoogleFormBanner from 'components/Header/GoogleFormBanner';
import SearchBar from 'components/Header/SearchBar';
import StaticHashTag from 'components/Header/StaticHashTag';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0.7rem 0;
  color: #000;
  font-weight: 700;
  z-index: 1;
`;
const SearchNHashtagContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

const Header = () => {
  return (
    <>
      <GoogleFormBanner />
      <HeaderContainer>
        <SearchNHashtagContainer>
          <SearchBar />
          <StaticHashTag />
        </SearchNHashtagContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
