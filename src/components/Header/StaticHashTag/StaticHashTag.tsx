import { HashtagButton, HashtagIcon } from './StaticHashTagUtils';

const StaticHashTag = () => {
  return (
    <HashtagButton>
      <HashtagIcon
        src={`${process.env.PUBLIC_URL}/assets/images/hashtag_icon.svg`}
        alt="HashTag Icon"
      />
    </HashtagButton>
  );
};

export default StaticHashTag;
