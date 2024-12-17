import React from 'react';
import PropTypes from 'prop-types';
import useScrollAnimation from './useScrollAnimation';
import defaultStyles from './defaultScrollAnimation.module.css';

const ScrollRevealWrapperAllDescendants = ({ children, customStyles = {} }) => {
  const styles = { ...defaultStyles, ...customStyles };
  const hiddenElementsRef = useScrollAnimation(styles.scr_show);

  // Helper function to recursively apply refs and classes to all descendants
  const applyAnimation = (element) => {
    if (!React.isValidElement(element)) return null;

    // Clone the current element and add ref and class
    const clonedElement = React.cloneElement(element, {
      ref: (el) => el && hiddenElementsRef.current.push(el), // Push refs for all elements
      className: `${styles.scr_hidden} ${element.props.className || ''}`, // Append class
    });

    // Recursively handle nested children
    if (clonedElement.props.children) {
      return React.cloneElement(clonedElement, {
        children: React.Children.map(clonedElement.props.children, applyAnimation),
      });
    }

    return clonedElement;
  };

  return <>{React.Children.map(children, applyAnimation)}</>;
};

// Add prop types validation
ScrollRevealWrapperAllDescendants.propTypes = {
  children: PropTypes.node.isRequired, // Ensure `children` is provided
  customStyles: PropTypes.object,     // Optional, but must be an object
};

export default ScrollRevealWrapperAllDescendants;
