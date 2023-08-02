import styled from 'styled-components';
import { Button } from 'components/Common';

export interface ArrowButtonProps {
  onClick: () => void;
  icon: string;
}

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
`;

export const ArrowIcon = styled(Button)`
  font-size: 2.5rem;
  background: transparent;
  color: ${(props) => props.theme.backgroundSecondary};
`;
