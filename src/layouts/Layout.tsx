import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { useDisplaySize } from 'hooks';
import { OnBoarding } from 'components/OnBoarding';
import styled from 'styled-components';

const OutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 840px;
`;

const Content = styled.div`
  display: flex;
  max-width: 420px;
  width: 100vw;
  height: 100vh;
  flex: 1;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Layout = ({ children }: PropsWithChildren) => {
  const displaySize = useDisplaySize();

  return (
    <OutContainer>
      <MainContainer>
        {displaySize > 1000 ? <OnBoarding /> : <div />}
        <Content>{children || <Outlet />}</Content>
      </MainContainer>
    </OutContainer>
  );
};

export default Layout;
