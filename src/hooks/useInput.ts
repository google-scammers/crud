import { useState, useCallback } from 'react';

export const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  }, []);

  return [inputValue, onChange, setInputValue] as const;
};
