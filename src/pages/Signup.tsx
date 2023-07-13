import { useState } from 'react';

import { AuthInput } from 'components/AuthInput';

const Signup = () => {
  const [test, setTest] = useState('');
  return (
    <div>
      Sign up
      <AuthInput
        type="test"
        label="test"
        id="test"
        onChange={(e) => {
          setTest(e.target.value);
        }}
        value={test}
        name="test"
      />
    </div>
  );
};

export default Signup;
