import { useState } from 'react';

export const useDropdown = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleDropdown };
};