import { useInput } from 'hooks/useInput';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { AuthForm } from 'components/AuthForm';
import { AuthInput } from 'components/AuthInput';
import { SubmitButton } from 'components/SubmitButton';
import { TextButton } from 'components/TextButton';

import { signup } from '../apis/user';

const InputContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 52px;
`;

const Signup = () => {
  const {
    inputValue: emailInputValue,
    onChange: onChangeEmail,
    validation: emailValidation,
  } = useInput('', 'email');
  const {
    inputValue: passwordInputValue,
    onChange: onChangePassword,
    validation: passwordValidation,
  } = useInput('', 'password');
  const {
    inputValue: passwordToCompareInputValue,
    onChange: onChangePasswordToCompare,
    validation: passwordToCompareValidation,
  } = useInput('', 'confirm_password', passwordInputValue);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData);
    signup(formData)
      .then(() => {
        navigate('/crud');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AuthForm handleSubmit={handleSubmit}>
        <InputContainer>
          <AuthInput
            type="email"
            label="email"
            id="email"
            name="email"
            onChange={onChangeEmail}
            value={emailInputValue}
            bottomText={emailValidation.errorMessage}
            validation={true}
          />
          <AuthInput
            type="password"
            label="password"
            id="password"
            name="password"
            onChange={onChangePassword}
            value={passwordInputValue}
            bottomText={passwordValidation.errorMessage}
            validation={true}
          />
          <AuthInput
            type="password"
            label="confirm password"
            id="confirm_password"
            name="confirm_password"
            onChange={onChangePasswordToCompare}
            value={passwordToCompareInputValue}
            bottomText={passwordToCompareValidation.errorMessage}
            validation={true}
          />
          <TextButton text="로그인" />
        </InputContainer>
        <ButtonWrapper>
          <SubmitButton text="회원가입" />
        </ButtonWrapper>
      </AuthForm>
    </div>
  );
};

export default Signup;
