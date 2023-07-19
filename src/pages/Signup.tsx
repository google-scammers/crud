import { useInput } from 'hooks/useInput';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { AuthForm } from 'components/AuthForm';
import { AuthInput } from 'components/AuthInput';
import { SubmitButton } from 'components/SubmitButton';
import { colors } from 'constants/colors';

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

const SignUpButton = styled.div`
  width: 100%;
  text-align: end;
  color: ${colors.grey600};
  margin-top: 14px;
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

  return (
    <div>
      <AuthForm>
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
          <AuthInput
            type="confirm_password"
            label="confirm password"
            id="confirm_password"
            name="confirm_password"
            onChange={onChangePassword}
            value={passwordInputValue}
            bottomText={passwordValidation.errorMessage}
            validation={false}
          />
          <Link to="/crud/login">
            <SignUpButton>로그인</SignUpButton>
          </Link>
        </InputContainer>
        <ButtonWrapper>
          <SubmitButton text="회원가입" />
        </ButtonWrapper>
      </AuthForm>
    </div>
  );
};

export default Signup;
