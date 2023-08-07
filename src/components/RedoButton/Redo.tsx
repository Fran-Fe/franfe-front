import { Button } from 'components/Common';
import styled from 'styled-components';

const RedoButton = styled(Button)`
  width: 3rem;
  height: 2rem;
  margin: 0.5rem auto;
  border-radius: 20px;
  background-color: ${(props) => props.theme.fontPrimary};
  z-index: 1;
`;

const Redo = () => {
  return <RedoButton scale="md">REDO</RedoButton>;
};

export default Redo;
