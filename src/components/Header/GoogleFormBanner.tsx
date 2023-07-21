import styled from 'styled-components';

const BeltContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 0.2rem;
  margin-bottom: 5px;
  font-size: 0.8rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;
const BeltText = styled.p`
  color: ${(props) => props.theme.fontPrimary};
`;
const GoogleFormText = styled.a`
  color: #ff0000;
`;

const GoogleFormBanner: React.FC = () => {
  return (
    <BeltContainer>
      <BeltText>
        We need your feedback! Please
        <GoogleFormText
          href="https://www.google.com/forms/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Click here&nbsp;
        </GoogleFormText>
        for your precious opinion.
      </BeltText>
    </BeltContainer>
  );
};

export default GoogleFormBanner;
