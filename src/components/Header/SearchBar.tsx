import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  width: 80%;
  height: 43px;
  margin-right: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0.25rem 0.25rem ${(props) => props.theme.backgroundSecondary};
  background-color: ${(props) => props.theme.backgroundTertiary};
`;

const SearchBarTextContainer = styled.input`
  width: 85%;
  font-size: 1.1rem;
  border-style: none;
  font-color: ${(props) => props.theme.fontPrimary};
  background-color: ${(props) => props.theme.backgroundTertiary};
`;

const SearchBarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

const SearchIconImg = styled.img`
  width: 60%;
  height: 60%;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarTextContainer placeholder="Search Here" />
      <SearchBarButton>
        <SearchIconImg
          src={`${process.env.PUBLIC_URL}/assets/images/search_icon.svg`}
          alt="Search Icon"
        />
      </SearchBarButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
