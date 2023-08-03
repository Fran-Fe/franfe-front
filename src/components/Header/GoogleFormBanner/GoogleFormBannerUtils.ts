import styled from 'styled-components';

export const BeltContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 0.2rem;
  font-size: 0.8em;
  text-align: center;
  z-index: 3;
  color: ${(props) => props.theme.fontPrimary};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

export const GoogleFormText = styled.a`
  font-size: 1.2em;
  color: #ff0000;
`;
