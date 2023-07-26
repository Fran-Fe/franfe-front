import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// CardContainerUtils
export const CardCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
  overflow: auto;
  border-radius: 1.25rem;
  box-shadow: 0 4px 4px ${(props) => props.theme.backgroundSecondary};
  z-index: 1;
`;

export const CardImageContainer = styled.div`
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
  width: 100%;
  height: 45%;
  overflow-x: auto;
`;

export const CardImage = styled.img`
  flex-shrink: 0;
  width: 40%;
  height: 100%;
  margin: 0 0.1rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

export const CardTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 55%;
  padding: 0.5rem 0 0 0.5rem;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

// SliderUtils
export const CustomSlider = styled(Slider)`
  position: relative;
  display: flex;
  .slick-arrow {
    padding: 2rem;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${(props) => props.theme.backgroundSecondary};
  }
  .slick-dots {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
