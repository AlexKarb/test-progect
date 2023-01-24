import { useEffect, useRef, useState } from 'react';

const mql = window.matchMedia(`(min-width: 768px)`);

export const useReCaptchaSize = () => {
  const recaptchaRef = useRef(null);
  const [size, setSize] = useState(mql.matches ? 'normal' : 'compact');

  useEffect(() => {
    const mediaQueryChanged = () => {
      mql.matches ? setSize('normal') : setSize('compact');
      recaptchaRef.current.reset();
    };

    mql.addEventListener('change', mediaQueryChanged);

    return () => {
      mql.removeEventListener('change', mediaQueryChanged);
    };
  });

  return [recaptchaRef, size];
};
