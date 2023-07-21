import styled from 'styled-components';

const BeltDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 1rem;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;
const GoogleFormCon = styled.p`
  color: ${(props) => props.theme.fontPrimary};
`;
const GoogleFormA = styled.a`
  font-size: 1.1rem;
  color: #ff0000;
`;

const GoogleFormBanner: React.FC = () => {
  return (
    <BeltDiv>
      <GoogleFormCon>
        We need your feedback! Please
        <GoogleFormA
          href="https://www.google.com/forms/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Click here{' '}
        </GoogleFormA>
        for your precious opinion.
      </GoogleFormCon>
    </BeltDiv>
  );
};

export default GoogleFormBanner;
