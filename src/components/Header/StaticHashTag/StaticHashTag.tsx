import { useState } from 'react';
import { HashtagButton, HashtagIcon } from 'components/Header/StaticHashTag/StaticHashTagUtils';
import StaticHashTagDrawer from './StaticHashTagDrawer/StaticHashTagDrawer';

interface HeaderStaticHashtagsProps {
  Hashtags: string[];
}

const StaticHashTag = (props: HeaderStaticHashtagsProps) => {
  const { Hashtags } = props;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HashtagButton onClick={showDrawer}>
        <HashtagIcon
          src={`${process.env.PUBLIC_URL}/assets/images/hashtag_icon.svg`}
          alt="HashTag Icon"
        />
      </HashtagButton>
      <StaticHashTagDrawer isOpen={open} onClose={onClose} Hashtags={Hashtags} />
    </>
  );
};

export default StaticHashTag;
