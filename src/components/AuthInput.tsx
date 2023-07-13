import { colors } from 'constants/colors';

import { styled } from 'styled-components';

type AuthInputProps = {
  type: string;
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
};

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  padding: 5px 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  color: ${colors.grey700};
`;

const Input = styled.input`
  width: 100%;
  padding: 0 18px;
  font-size: 15px;
  line-height: 48px;
  margin: 0;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: inset 0 0 0 1px ${colors.greyOpacity200};

  &:focus {
    box-shadow: inset 0 0 0 2px ${colors.blue500};
  }
`;

export const AuthInput = ({
  type,
  label,
  id,
  onChange,
  name,
  value,
}: AuthInputProps) => {
  return (
    <Container>
      <Label htmlFor={id} className="flex flex-col">
        {label}
        <Input
          type={type}
          placeholder={label}
          id={id}
          onChange={onChange}
          name={name}
          value={value}
        />
      </Label>
    </Container>
  );
};
