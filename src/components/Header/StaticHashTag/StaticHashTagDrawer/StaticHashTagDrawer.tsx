import { Drawer } from 'components/Common';
import {
  IDrawerVisble,
  StaticHashtagDrawerContainer,
  BackButtonContainer,
  StaticHashtagBackButton,
  StaticHashtagIconsContainer,
  StaticHashtagIconButton,
  DynamicHashtagIconsContainer,
  DynamicHashtagIconButton,
  StaticHashTagDrawerFooter,
  DrawerButton,
} from './StaticHashTagDrawerUtils';

function generateRandomString() {
  return Math.random().toString(36).substring(2, 7);
}

const StaticHashTagDrawer = (props: IDrawerVisble) => {
  const HashtagData = ['WiFi', 'Park', 'Power', 'Toliet'];
  const size = '100%';
  const { isOpen, onClose, Hashtags } = props;

  return (
    <Drawer
      placement="top"
      closable={false}
      onClose={onClose}
      open={isOpen}
      getContainer={false}
      height={size}
      footer={
        <StaticHashTagDrawerFooter>
          <DrawerButton onClick={onClose}>cancel</DrawerButton>
          <DrawerButton>apply</DrawerButton>
        </StaticHashTagDrawerFooter>
      }
    >
      <StaticHashtagDrawerContainer>
        <BackButtonContainer>
          <StaticHashtagBackButton
            src={`${process.env.PUBLIC_URL}/assets/images/back_icon.svg`}
            onClick={onClose}
          />
        </BackButtonContainer>
        <StaticHashtagIconsContainer>
          {HashtagData.map((hashtag, index) => (
            <StaticHashtagIconButton key={hashtag + index.toString()}>
              {hashtag}
            </StaticHashtagIconButton>
          ))}
        </StaticHashtagIconsContainer>
        <DynamicHashtagIconsContainer>
          {Hashtags.map((hashtag, index) => (
            <DynamicHashtagIconButton key={hashtag + index.toString()}>
              {hashtag}
            </DynamicHashtagIconButton>
          ))}
        </DynamicHashtagIconsContainer>
      </StaticHashtagDrawerContainer>
    </Drawer>
  );
};

export default StaticHashTagDrawer;
