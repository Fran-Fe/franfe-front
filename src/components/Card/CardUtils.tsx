import { Button } from 'components/Common';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// CardContainerUtils
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
  overflow: auto;
  border-radius: 1.25rem;
  z-index: 1;
  box-shadow: 0 4px 4px ${(props) => props.theme.backgroundSecondary};
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const CardImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.3rem;
  width: 100%;
  height: 40%;
  overflow-x: auto;
`;

export const CardImage = styled.img`
  flex-shrink: 0;
  width: 40%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 60%;
`;

// SliderUtils
export const CustomSlider = styled(Slider)`
  display: flex;
  .slick-arrow {
    padding: 2rem;
    border-radius: 50%;
    color: #fff;
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${(props) => props.theme.backgroundSecondary};
  }
  z-index: 4;
`;

export const CardTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 0 0.5rem;
`;

export const CardBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.3rem 0.4rem 0.3rem 1rem;
  font-size: 90%;
`;

export const CardTitle = styled.p`
  font-size: 1.2rem;
`;

export const CustomButton = styled(Button)`
  width: 3.7rem;
  height: 1.7rem;
  box-shadow: 0 4px 4px ${(props) => props.theme.backgroundSecondary};
`;
