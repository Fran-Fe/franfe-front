import styled from 'styled-components';
import { SearchBar, StaticHashTag } from 'components/Header';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  color: #000;
  font-weight: 700;
  z-index: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar />
      <StaticHashTag />
    </HeaderContainer>
  );
};

export default Header;
