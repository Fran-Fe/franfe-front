import styled from 'styled-components';
import {
  SearchBarContainer,
  SearchBarTextContainer,
  SearchBarButton,
  SearchIconImg,
} from './SearchBarUtils';

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
