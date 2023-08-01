import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Common';

interface ArrowButtonProps {
  onClick: () => void;
  icon: string;
}

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
`;

const ArrowIcon = styled(Button)`
  font-size: 2.5rem;
  background: transparent;
  color: ${(props) => props.theme.backgroundSecondary};
`;

const ArrowButton = (props: ArrowButtonProps) => {
  const { onClick, icon } = props;
  return (
    <ArrowContainer>
      <ArrowIcon onClick={onClick}>{icon}</ArrowIcon>
    </ArrowContainer>
  );
};

export default ArrowButton;
