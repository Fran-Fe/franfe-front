import styled from 'styled-components';

const HashtagBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  heigth: 50px;
  padding: 0.5rem 1.5rem;
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 0.25rem ${(props) => props.theme.backgroundSecondary};
  background-color: ${(props) => props.theme.backgroundTertiary};
`;

const HashtagIcon = styled.img`
  width: 50%;
  height: 50%;
`;

const StaticHashTag = () => {
  return (
    <HashtagBtn>
      <HashtagIcon src={`${process.env.PUBLIC_URL}/assets/images/hashtag_icon.svg`} alt="asd" />
    </HashtagBtn>
  );
};

export default StaticHashTag;
