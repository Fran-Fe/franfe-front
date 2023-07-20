import { useState, useEffect, useMemo } from 'react';

const useDisplaySize = () => {
  const [currentDisplaySize, setCurrentDisplaySize] = useState(1200);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateDisplaySize = () => {
      timeoutId = setTimeout(() => {
        setCurrentDisplaySize(window.innerWidth);
      }, 200);
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
