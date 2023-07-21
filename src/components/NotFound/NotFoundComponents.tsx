import styled from 'styled-components';

export const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

export const ErrorImg = styled.img`
  width: 25.5em;
  height: 15.2em;
`;

export const ErrorText = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.fontError};
`;

export const ErrorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 2.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.fontError};
`;

export const ErrorButtonText = styled.h1`
  font-size: 1.4rem;
  color: ${(props) => props.theme.backgroundPrimary};
`;
