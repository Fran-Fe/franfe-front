import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { useDisplaySize } from 'hooks';
import { OnBoarding } from 'components/OnBoarding';
import { GoogleFormBanner } from 'components/Header';
import { Footer } from 'components/Footer';
import styled from 'styled-components';

const OutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundOutside};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 840px;
`;

const Content = styled.main`
  position: relative;
  display: flex;
  flex: 1;
  max-width: 420px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Layout = ({ children }: PropsWithChildren) => {
  const displaySize = useDisplaySize();

  return (
    <OutContainer>
      <ContentContainer>
        {displaySize > 1000 ? <OnBoarding /> : <div />}
        <Content>
          <GoogleFormBanner />
          {children || <Outlet />}
          <Footer />
        </Content>
      </ContentContainer>
    </OutContainer>
  );
};

export default Layout;
