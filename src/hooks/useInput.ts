import { useState } from 'react';

type UpdateValidationStatus = (
  value: string,
  setValidation: (value: { isSuccess: boolean; errorMessage: string }) => void
) => void;

export const useInput = (
  initialValue: string,
  validationOption: string,
  passwordToCompare?: string
) => {
  let regex: RegExp;
  let errorMessage: string;

  const createRegex = (str = '') => new RegExp(`${str}$`);

  if (validationOption === 'email') {
    regex = /.*@.*/;
    errorMessage = '이메일 형식이 올바르지 않습니다.';
  }
  if (validationOption === 'password') {
    regex = /.{8}/;
    errorMessage = '8자 이상으로 작성해주세요.';
  }
  if (validationOption === 'confirm_password') {
    regex = createRegex(passwordToCompare);
    errorMessage = '비밀번호가 일치하지 않습니다.';
  }

  const updateValidationStatus: UpdateValidationStatus = (
    value,
    setValidation
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
    updateValidationStatus(value, setValidation);
  };

  return { inputValue, onChange, validation };
};
