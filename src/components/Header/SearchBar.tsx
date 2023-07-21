import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50px;
  padding: 0.5rem 1.5rem;
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 0.25rem ${(props) => props.theme.backgroundSecondary};
  background-color: ${(props) => props.theme.backgroundTertiary};
`;
const SearchBarTextContainer = styled.input`
  width: 85%;
  height: 100%;
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
  height: 100%;
`;
const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarTextContainer placeholder="Search Here" />
      <SearchBarBtn>
        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </SearchBarBtn>
    </SearchBarContainer>
  );
};

export default SearchBar;
