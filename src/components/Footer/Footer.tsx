import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FooterContainer, FooterIconButton, FooterIcon, FooterCategories } from 'components/Footer';

const Footer = () => {
  const presentLocation = useLocation();
  const navigate = useNavigate();
  const presentURL = presentLocation.pathname.replace('/', '');
  const [selectedFooter, setSelectedFooter] = useState(presentURL || 'home');

  useEffect(() => {
    setSelectedFooter(presentURL || 'home');
  }, [presentURL]);

  const handleSelectedFooter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCategory = event.currentTarget.name.toLowerCase();
    setSelectedFooter(selectedCategory);

    if (['gallery', 'ranking', 'list'].includes(selectedCategory)) navigate(`/${selectedCategory}`);
    if (selectedCategory === 'home') navigate('/');
  };

  return (
    <FooterContainer>
      {FooterCategories.map((category) => {
        return (
          <FooterIconButton
            key={category}
            name={category.toLowerCase()}
            selectedcategory={selectedFooter}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleSelectedFooter(event)}
          >
            <FooterIcon
              src={`${process.env.PUBLIC_URL}/assets/images/${category}.svg`}
              alt={`${category} Icon`}
            />
            {category}
          </FooterIconButton>
        );
      })}
    </FooterContainer>
  );
};

export default Footer;
