import styled from 'styled-components';

export const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ErrorImg = styled.img`
  width: 25.5em;
  height: 15.2em;
`;

export const ErrorText = styled.span`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.fontError};
`;
