import styled from 'styled-components';

interface IFooterButtonProps {
  name: string;
  selectedcategory: string;
}

export const FooterCategories = ['Home', 'Pick', 'Gallery', 'Ranking', 'List'];

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

export const FooterIconButton = styled.button<IFooterButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 20%;
  padding: 8px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  transition: box-shadow 0.3s ease;
  color: ${(props) => props.theme.fontPrimary};
  box-shadow: ${(props) =>
    props.selectedcategory === props.name
      ? 'inset 3px 3px 6px rgba(0, 0, 0, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.7);'
      : 'none'};
`;
export const FooterIcon = styled.img`
  width: 100%;
  height: 65%;
`;
