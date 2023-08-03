import { useState, useEffect, useMemo } from 'react';

const useDisplaySize = () => {
  const [currentDisplaySize, setCurrentDisplaySize] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateDisplaySize = () => {
      timeoutId = setTimeout(() => {
        setCurrentDisplaySize(window.innerWidth);
      }, 2000);
    };
    window.addEventListener('resize', updateDisplaySize);

    return () => {
      window.removeEventListener('resize', updateDisplaySize);
      clearTimeout(timeoutId);
    };
  }, []);

  return useMemo(() => currentDisplaySize, [currentDisplaySize]);
};

export default useDisplaySize;
