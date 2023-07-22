import styled from 'styled-components';

const BeltContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 0.2rem;
  font-size: 0.8em;
  text-align: center;
  z-index: 3;
  color: ${(props) => props.theme.fontPrimary};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const GoogleFormText = styled.a`
  font-size: 1.2em;
  color: #ff0000;
`;

const GoogleFormBanner = () => {
  return (
    <BeltContainer>
      Please
      <GoogleFormText
        href="https://www.google.com/forms/about/"
        target="_blank"
        rel="noopener noreferrer"
      >
        &nbsp;Click here&nbsp;
      </GoogleFormText>
      for your precious feedback.
    </BeltContainer>
  );
};

export default GoogleFormBanner;
