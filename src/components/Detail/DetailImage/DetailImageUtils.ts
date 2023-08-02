import styled from 'styled-components';

export const DetailImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 23%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DetailImg = styled.img`
  flex-shrink: 0;
  width: 90%;
  height: 100%;
  margin: 0 0.5rem;
  border-radius: 20px;
  background-color: #f2f2f2;
`;
