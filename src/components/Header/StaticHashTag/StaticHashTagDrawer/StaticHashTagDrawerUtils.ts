import styled from 'styled-components';
import { Button } from 'components/Common';
import { HashtagIconButton } from 'components/HashtagIcon';

export interface IDrawerVisble {
  isOpen: boolean;
  onClose: () => void;
  Hashtags: string[];
}

export const StaticHashtagDrawerContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const BackButtonContainer = styled.div`
  position: sticky;
  top: -2px;
  width: 100%;
  height: 8%;
  background-color: #fff;
`;

export const StaticHashtagBackButton = styled.img`
  width: 8%;
  transform: rotate(90deg);
`;

export const StaticHashtagIconsContainer = styled.div`
  position: sticky;
  top: 7.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background-color: #fff;
`;

export const StaticHashtagIconButton = styled(HashtagIconButton)`
  width: auto;
  height: 2rem;
  white-space: nowrap;
  border: 0.2rem solid ${(props) => props.theme.buttonPrimary};
`;

export const DynamicHashtagIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 0.7rem;
`;

export const DynamicHashtagIconButton = styled(HashtagIconButton)`
  width: auto;
  height: 1.5rem;
  white-space: nowrap;
`;

export const StaticHashTagDrawerFooter = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
`;

export const DrawerButton = styled(Button)`
  width: 50%;
  height: 100%;
  margin: 0.5rem auto;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: ${(props) => props.theme.fontPrimary};
  background: #fff;
`;
