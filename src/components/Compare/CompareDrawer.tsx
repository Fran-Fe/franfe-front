import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Drawer } from 'components/Common';
import { Card } from 'components/Card';
import { Detail } from 'components/Detail';

interface ICompareDrawer {
  onClose: any;
}

const CompareDrawer = styled(Drawer)`
  .ant-drawer-header {
    font-size: 2rem;
    height: 12%;
  }
  .ant-drawer-extra {
    display: flex;
  }
  .ant-drawer-body {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
  }
`;

const Compare = (props: ICompareDrawer) => {
  const navigate = useNavigate();
  const { onClose } = props;
  const compareSize = '70%';
  const detailSize = '100%';
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [openDetail, setOpenDetail] = useState(false);

  const showDetail = () => {
    setOpenDetail(true);
  };

  const closeDetail = () => {
    setOpenDetail(false);
  };

  const closeCompareDrawer = () => {
    setDrawerOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <CompareDrawer
        title=" "
        placement="bottom"
        onClose={closeCompareDrawer}
        open={drawerOpen}
        getContainer={false}
        height={compareSize}
        extra={
          <Button
            scale="xs"
            onClick={() => {
              closeCompareDrawer();
              navigate('/Compare');
            }}
          >
            Start Compare
          </Button>
        }
      >
        {/* <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} /> */}
      </CompareDrawer>
      <Drawer
        placement="bottom"
        closable={false}
        onClose={closeDetail}
        open={openDetail}
        getContainer={false}
        height={detailSize}
      >
        {/* <Detail isOpen={openDetail} onClose={closeDetail} /> */}
      </Drawer>
    </>
  );
};

export default CompareDrawer;
