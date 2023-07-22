import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3.5rem;
  padding: 0.3rem;
  z-index: 2;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const FooterIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 20%;
  font-size: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.fontPrimary};
`;

export const FooterIcon = styled.img`
  width: 100%;
  height: 65%;
`;
