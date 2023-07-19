import { styled } from 'styled-components';

import { colors } from 'constants/colors';

type AuthInputProps = {
  type: string;
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
  bottomText: string;
};

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  width: 100%;
  padding: 2px 0;
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

const BottomText = styled.p`
  width: 100%;
  height: 16px;
  color: ${colors.red600};
  margin-top: 4px;
  display: inline-block;
  font-weight: 400;
  font-size: 15px;
`;

export const AuthInput = ({
  type,
  label,
  id,
  onChange,
  name,
  value,
  bottomText,
}: AuthInputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>
        <Input
          type={type}
          placeholder={label}
          id={id}
          onChange={onChange}
          name={name}
          value={value}
        />
        <BottomText>{bottomText}</BottomText>
      </Label>
    </Container>
  );
};
