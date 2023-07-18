import { useInput } from 'hooks/useInput';

import { AuthInput } from 'components/AuthInput';

const Signup = () => {
  const {
    inputValue: EmailInputValue,
    onChange: EmailOnChange,
    validation: EmailValidation,
  } = useInput('', 'email');
  return (
    <div>
      Sign up
      <AuthInput
        type="test"
        label="test"
        id="test"
        onChange={EmailOnChange}
        value={EmailInputValue}
        name="test"
        bottomText={EmailValidation.errorMessage}
      />
    </div>
  );
};

export default Signup;
