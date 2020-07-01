import React, { useState, useEffect } from 'react';

export const SearchInput = ({
  value,
  placeholders,
  handleChange
}) => {
  const initialPlaceholder = placeholders && placeholders[0]
    ? placeholders[0]
    : "Enter link";

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const updateIndex = placeholderIndex >= placeholders.length - 1
        ? 0
        : placeholderIndex + 1;

      setPlaceholderIndex(updateIndex);
      setPlaceholder(placeholders[updateIndex]);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [placeholderIndex]);

  return (
    <input
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
