import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Common';

interface ArrowButtonProps {
  onClick: () => void;
  icon: string;
}

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
`;

const CustomBtn = styled(Button)`
  font-size: 2.5rem;
  background: transparent;
  color: ${(props) => props.theme.backgroundSecondary};
`;

const ArrowButton = (props: ArrowButtonProps) => {
  const { onClick, icon } = props;
  return (
    <BtnContainer>
      <CustomBtn onClick={onClick}>{icon}</CustomBtn>
    </BtnContainer>
  );
};

export default ArrowButton;
