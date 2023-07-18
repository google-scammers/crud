import { useState } from 'react';

export const useInput = (initialValue: string, validationOption: string) => {
  let regex: RegExp;
  let errorMessage: string;
  if (validationOption === 'email') {
    regex = /.*@.*/;
    errorMessage = '이메일 형식이 올바르지 않습니다.';
  }
  if (validationOption === 'password') {
    regex = /.{8}/;
    errorMessage = '8자 이상으로 작성해주세요.';
  }
  const validationFunc = (
    value: string,
    setValidation: React.Dispatch<
      React.SetStateAction<{
        isSuccess: boolean;
        errorMessage: string;
      }>
    >
  ) => {
    const validationRegex = () => regex.test(value);
    if (value.length === 0) {
      setValidation({
        isSuccess: false,
        errorMessage: '필수 정보입니다.',
      });
    } else if (validationRegex()) {
      setValidation({ isSuccess: true, errorMessage: '' });
    } else {
      setValidation({
        isSuccess: false,
        errorMessage: errorMessage,
      });
    }
  };

  const [inputValue, setInputValue] = useState(initialValue);
  const [validation, setValidation] = useState({
    isSuccess: false,
    errorMessage: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    validationFunc(value, setValidation);
  };

  return [inputValue, onChange, validation] as const;
};
