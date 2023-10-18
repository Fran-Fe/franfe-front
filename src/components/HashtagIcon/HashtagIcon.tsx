import styled, { css } from 'styled-components';
import { useState } from 'react';

interface HashtagContextProps {
  Hashtags: string[];
  /* eslint-disable react/require-default-props */
  setSelectedHashtagIndex?: (index: number | null) => void;
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

export const HashtagIconButton = styled.button<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 1.5rem;
  margin: 0.2rem 0;
  padding: 0 1rem;
  white-space: nowrap;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 2px ${(props) => props.theme.backgroundSecondary};
  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${(props) => props.theme.buttonPrimary};
      color: white;
    `}
`;

const HashtagIcon = (props: HashtagContextProps) => {
  const { Hashtags = [], setSelectedHashtagIndex } = props;

  // 선택된 해시태그의 인덱스를 저장하는 상태
  const [selectedHashtagIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index); // 로컬 상태 업데이트
    if (setSelectedHashtagIndex) {
      setSelectedHashtagIndex(index); // 부모 컴포넌트로 전달
    }
  };

  return (
    <HashtagsOverflow>
      {Hashtags.map((hashtag, index) => (
        <HashtagIconButton
          key={hashtag + index.toString()}
          onClick={() => handleClick(index)}
          isSelected={selectedHashtagIndex === index} // 조건부 스타일링
        >
          {hashtag}
        </HashtagIconButton>
      ))}
    </HashtagsOverflow>
  );
};

export default HashtagIcon;
