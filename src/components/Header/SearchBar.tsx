import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50px;
  margin-right: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 0.25rem ${(props) => props.theme.backgroundSecondary};
  background-color: ${(props) => props.theme.backgroundTertiary};
`;
const SearchBarTextContainer = styled.input`
  width: 85%;
  font-size: 1.1rem;
  font-color: ${(props) => props.theme.fontPrimary};
  border-style: none;
  background-color: ${(props) => props.theme.backgroundTertiary};
`;
const SearchBarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;
const SearchIconImg = styled.img`
  width: 50%;
  height: 50%;
`;
const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarTextContainer placeholder="Search Here" />
      <SearchBarBtn>
        <SearchIconImg src={`${process.env.PUBLIC_URL}/assets/images/search_icon.svg`} alt="asd" />
      </SearchBarBtn>
    </SearchBarContainer>
  );
};

export default SearchBar;
