import { BeltContainer, GoogleFormText } from './GoogleFormBannerUtils';

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
