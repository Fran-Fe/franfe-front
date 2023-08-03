import styled from 'styled-components';

export const HashtagButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0.25rem 0.25rem ${(props) => props.theme.backgroundSecondary};
  background-color: ${(props) => props.theme.backgroundTertiary};
`;

export const HashtagIcon = styled.img`
  width: 60%;
  height: 60%;
`;
