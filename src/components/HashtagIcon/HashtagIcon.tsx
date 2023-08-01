import styled from 'styled-components';

interface HashtagContextProps {
  Hashtags: string[];
}

const HashtagsOverflow = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  margin-left: 0.5rem;
  z-index: 1;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HashtagIconButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.5rem;
  margin: 0.2rem 0;
  padding: 0 1rem;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 2px ${(props) => props.theme.backgroundSecondary};
`;

const HashtagIcon = (props: HashtagContextProps) => {
  const { Hashtags } = props;

  return (
    <HashtagsOverflow>
      {Hashtags.map((hashtag, index) => (
        <HashtagIconButton key={hashtag + index.toString()}>{hashtag}</HashtagIconButton>
      ))}
    </HashtagsOverflow>
  );
};

export default HashtagIcon;
