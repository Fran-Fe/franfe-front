import styled from 'styled-components';

const HashtagBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  heigth: 43px;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0.25rem 0.25rem ${(props) => props.theme.backgroundSecondary};
  background-color: ${(props) => props.theme.backgroundTertiary};
`;

const HashtagIcon = styled.img`
  width: 60%;
  height: 60%;
`;

const StaticHashTag = () => {
  return (
    <HashtagBtn>
      <HashtagIcon
        src={`${process.env.PUBLIC_URL}/assets/images/hashtag_icon.svg`}
        alt="HashTag Icon"
      />
    </HashtagBtn>
  );
};

export default StaticHashTag;
