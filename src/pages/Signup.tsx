import { useInput } from 'hooks/useInput';

import { AuthInput } from 'components/AuthInput';

const Signup = () => {
  const [inputValue, onChange] = useInput('');
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
      />
    </div>
  );
};

export default Signup;
