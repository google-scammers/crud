import { FC, FormEventHandler } from 'react';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

const StyledButton = styled.button`
  width: 337px;
  height: 81px;
  cursor: pointer;
  border-radius: 5px;
  padding: 28px 140px;
  color: ${colors.white};
  background-color: ${colors.blue500};
  &:hover {
    background-color: ${colors.blue600};
  }
`;

type Props = {
  handleSubmit: FormEventHandler<HTMLButtonElement>;
  text: string;
};

export const SubmitButton: FC<Props> = ({ text }) => {
  return (
    <StyledButton type="submit">
      {text}
    </StyledButton>
  );
};
