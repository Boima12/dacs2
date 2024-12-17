import React from 'react';
import useScrollAnimation from './useScrollAnimation';
import defaultStyles from './defaultScrollAnimation.module.css'; // Default fallback styles

const ScrollRevealWrapper = ({ children, customStyles = {} }) => {
  const styles = { ...defaultStyles, ...customStyles }; // Merge default and custom styles
  const hiddenElementsRef = useScrollAnimation(styles.scr_show);

  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      ref: (el) => (hiddenElementsRef.current[index] = el),
      className: `${styles.scr_hidden} ${child.props.className || ''}`,
    })
  );
};

export default ScrollRevealWrapper;
