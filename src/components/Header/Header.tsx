import styled from 'styled-components';
import { SearchBar, StaticHashTag } from 'components/Header';

interface HeaderHashtagProps {
  Hashtags: string[];
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem 0.5rem;
  color: #000;
  font-weight: 700;
  z-index: 2;
`;

const Header = (props: HeaderHashtagProps) => {
  const { Hashtags } = props;
  return (
    <HeaderContainer>
      <SearchBar />
      <StaticHashTag Hashtags={Hashtags} />
    </HeaderContainer>
  );
};

export default Header;
