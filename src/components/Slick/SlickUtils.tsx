import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// SliderUtils
export const CustomSlider = styled(Slider)`
  margin: auto 0 4rem;
  .slick-arrow {
    padding: 2rem;
    border-radius: 50%;
    color: #fff;
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${(props) => props.theme.backgroundSecondary};
  }
`;
