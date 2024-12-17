import { useEffect, useRef } from 'react';

const useScrollAnimation = (classNameToShow) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classNameToShow);
        }
        //  else {
        //   entry.target.classList.remove(classNameToShow);
        // }
      });
    });

    const elements = elementsRef.current;

    // Observe only valid DOM elements
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Cleanup function to unobserve elements safely
    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el); // Check if el is valid before unobserving
      });
    };
  }, [classNameToShow]);

  return elementsRef;
};

export default useScrollAnimation;
