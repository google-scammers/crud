import { useInput } from 'hooks/useInput';

import { AuthInput } from 'components/AuthInput';

const Signup = () => {
  const { inputValue, onChange, validation } = useInput('', 'email');
  return (
    <div>
      Sign up
      <AuthInput
        type="test"
        label="test"
        id="test"
        onChange={onChange}
        value={inputValue}
        name="test"
        bottomText={validation.errorMessage}
      />
    </div>
  );
};

export default Signup;
