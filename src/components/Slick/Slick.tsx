import { useRef } from 'react';
import Slider from 'react-slick';
import { ArrowButton, CustomSlider } from 'components/Slick';

interface SlickProps {
  children: React.ReactNode; // Add children prop
}

const Slick = (props: SlickProps) => {
  const { children } = props;
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowButton onClick={handlePrevClick} icon="❮" />, // Add onClick prop
    nextArrow: <ArrowButton onClick={handleNextClick} icon="❯" />,
  };

  return <CustomSlider {...slickSettings}>{children}</CustomSlider>;
};

export default Slick;
