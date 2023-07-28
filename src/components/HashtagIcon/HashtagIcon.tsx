import styled from 'styled-components';

interface HashtagContextProps {
  Hashtags: string[];
}

const HashtagsOverflow = styled.div`
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 0 0 0.5rem 0.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 4;
`;

const HashtagIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 1.5rem;
  margin: 0.2rem 0.1rem;
  padding: 0 1rem;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 4px ${(props) => props.theme.backgroundSecondary};
`;

const HashtagIcon = (props: HashtagContextProps) => {
  const { Hashtags } = props;

  return (
    <HashtagsOverflow>
      {Hashtags.map((hashtag, index) => (
        <HashtagIconContainer key={hashtag + index.toString()}>{hashtag}</HashtagIconContainer>
      ))}
    </HashtagsOverflow>
  );
};

export default HashtagIcon;
