import { useRef } from 'react';
import Slider from 'react-slick';
import { CustomSlider } from 'components/Card/CardUtils';
import { ArrowBtn, CardContainer } from 'components/Card';

const Card = () => {
  const sliderRef = useRef<Slider>(null);

  const handlePrevClick = () => {
    // Move to the previous slide
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    // Move to the next slide
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowBtn onClick={handlePrevClick} icon="❮" />, // Add onClick prop
    nextArrow: <ArrowBtn onClick={handleNextClick} icon="❯" />,
  };
  return (
    <CustomSlider {...slickSettings}>
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </CustomSlider>
  );
};

export default Card;
