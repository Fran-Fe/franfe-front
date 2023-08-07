import { useState } from 'react';
import { HashtagButton, HashtagIcon } from 'components/Header/StaticHashTag/StaticHashTagUtils';
import StaticHashTagDrawer from './StaticHashTagDrawer/StaticHashTagDrawer';

const StaticHashTag = () => {
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
      <StaticHashTagDrawer isOpen={open} onClose={onClose} />
    </>
  );
};

export default StaticHashTag;
