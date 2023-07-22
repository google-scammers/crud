import { useInput } from 'hooks/useInput';
import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { AuthForm } from 'components/AuthForm';
import { AuthInput } from 'components/AuthInput';
import { SubmitButton } from 'components/SubmitButton';
import { colors } from 'constants/colors';

import { login } from '../apis/user';
import { userState } from '../recoil/user';

const InputContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    margin-top: 10px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 52px;
`;

const TextButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
  color: ${colors.grey600};
  font-weight: 500;
`;

export const Login = () => {
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

  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData);
    login(formData)
      .then((res) => {
        setUser({ email: res.data.email });
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
            validation={false}
          />
          <AuthInput
            type="password"
            label="password"
            id="password"
            name="password"
            onChange={onChangePassword}
            value={passwordInputValue}
            bottomText={passwordValidation.errorMessage}
            validation={false}
          />
          <TextButtonWrapper>
            <Link to="/crud/signup">회원가입</Link>
          </TextButtonWrapper>
        </InputContainer>
        <ButtonWrapper>
          <SubmitButton text="로그인" />
        </ButtonWrapper>
      </AuthForm>
    </div>
  );
};
