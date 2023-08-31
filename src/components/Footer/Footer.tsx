import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FooterContainer, FooterIconButton, FooterIcon, FooterCategories } from 'components/Footer';
import { CompareDrawer } from 'components/Compare';

const Footer = () => {
  const presentLocation = useLocation();
  const navigate = useNavigate();
  const presentURL = presentLocation.pathname.replace('/', '');
  const [selectedFooter, setSelectedFooter] = useState(presentURL || 'home');
  const [showCompare, setShowCompare] = useState(false);
  const [previousPath, setPreviousPath] = useState('/');

  useEffect(() => {
    setSelectedFooter(presentURL || 'home');
  }, [presentURL]);

  const handleCloseCompare = () => {
    setSelectedFooter(previousPath !== '/' ? previousPath : 'home');
    setShowCompare(false);
    navigate(`${previousPath}`);
  };

  const handleSelectedFooter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCategory = event.currentTarget.name.toLowerCase();
    setSelectedFooter(selectedCategory);

    if (selectedCategory === 'pick') {
      setShowCompare(true);
    } else {
      setPreviousPath(selectedCategory === 'home' ? '/' : selectedCategory);
      navigate(selectedCategory === 'home' ? '/' : `/${selectedCategory}`);
    }
  };

  return (
    <>
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
      {showCompare && <CompareDrawer onClose={handleCloseCompare} />}
    </>
  );
};

export default Footer;
