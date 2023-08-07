import styled from 'styled-components';
import { Button, Drawer } from 'components/Common';
import { HashtagIconButton } from 'components/HashtagIcon';

interface IDrawerVisble {
  isOpen: boolean;
  onClose: () => void;
}

const StaticHashtagDrawerContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
`;

const BackButtonContainer = styled.div`
  position: sticky;
  top: -2px;
  width: 100%;
  height: 8%;
  background-color: #fff;
`;

const StaticHashtagBackButton = styled.img`
  width: 8%;
  transform: rotate(90deg);
`;

const StaticHashtagIconsContainer = styled.div`
  position: sticky;
  top: 7.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background-color: #fff;
`;

const StaticHashtagIconButton = styled(HashtagIconButton)`
  width: 20%;
  height: 2rem;
  border: 0.2rem solid ${(props) => props.theme.buttonPrimary};
`;

const DynamicHashtagIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 0.7rem;
`;

const DynamicHashtagIconButton = styled(HashtagIconButton)`
  width: 16%;
`;

const StaticHashTagDrawerFooter = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
`;

const DrawerButton = styled(Button)`
  width: 50%;
  height: 100%;
  margin: 0.5rem auto;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: ${(props) => props.theme.fontPrimary};
  background: #fff;
`;

function generateRandomString() {
  return Math.random().toString(36).substring(2, 7);
}

const StaticHashTagDrawer = (props: IDrawerVisble) => {
  const HashtagData = ['WiFi', 'Park', 'Power', 'Toliet'];
  const size = '100%';
  const { isOpen, onClose } = props;
  const Hashtags = Array.from({ length: 100 }, generateRandomString);

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
