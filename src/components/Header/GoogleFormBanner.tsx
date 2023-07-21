import styled from 'styled-components';

const BeltDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: ${(props) => props.theme.backgroundPrimary};
  padding: 1rem;
  margin-bottom: 5px;
`;
const GoogleFormCon = styled.p`
  color: ${(props) => props.theme.Secondary};
`;

const GoogleFormBanner: React.FC = () => {
  return (
    <BeltDiv>
      <GoogleFormCon>
        We need your feedback! Please{' '}
        <a href="https://www.google.com/forms/about/" style={{ fontSize: '1.1rem', color: 'red' }}>
          Click here
        </a>{' '}
        for your precious opinion.
      </GoogleFormCon>
    </BeltDiv>
  );
};

export default GoogleFormBanner;
