import styled from 'styled-components';

interface DetailDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const DetailDrawer = styled.div<DetailDrawerProps>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

export const BackButtonContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 3%;
`;

export const DetailBackButton = styled.img`
  width: 10%;
  transform: rotate(-90deg);
`;

export const DetailTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;

export const DetailTitle = styled.div`
  font-size: 2em;
`;

export const DetailGPTContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 40%;
  margin-top: 0.5rem;
  font-size: 5em;
  background-color: #e2e2e2;
`;
