import styled from 'styled-components';
import { useState } from 'react';
import { Card } from 'components/Card';
import { Slick } from 'components/Slick';
import { Drawer } from 'components/Common';
import { Detail } from 'components/Detail';

const CompareContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CompareHeader = styled.div`
    display: flex:
    width: 100%;
    height: 10%;
    padding: 2rem;
    font-size: 2rem;
    border: solid;
    border-color: #fff #fff #e2e2e2;
`;

const CompareGPTContainer = styled.div`
  width: 100%;
  height: 60%;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
`;

const CompareCardsContainer = styled.div`
  width: 100%;
  padding: 0 0 4rem 0;
`;

const Compare = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const detailSize = '100%';

  const showDetail = () => {
    setOpenDetail(true);
  };

  const closeDetail = () => {
    setOpenDetail(false);
  };

  return (
    <CompareContainer>
      <CompareHeader>Compare</CompareHeader>
      <CompareGPTContainer>GPT FILL IN</CompareGPTContainer>
      <CompareCardsContainer>
        <Slick>
          <Card onClick={showDetail} />
          <Card onClick={showDetail} />
        </Slick>
      </CompareCardsContainer>
      <Drawer
        placement="bottom"
        closable={false}
        onClose={closeDetail}
        open={openDetail}
        getContainer={false}
        height={detailSize}
      >
        <Detail isOpen={openDetail} onClose={closeDetail} />
      </Drawer>
    </CompareContainer>
  );
};

export default Compare;
