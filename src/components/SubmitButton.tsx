import { FC, FormEventHandler } from 'react';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

type ButtonSizeUnit = string | number;
type ButtonStyle<T> = {
  width?: T;
  height?: T;
  padding?: string;
};

const StyledButton = styled.button<ButtonStyle<ButtonSizeUnit>>`
  width: ${(props) =>
    typeof props.width === 'number'
      ? props.width.toString() + 'px'
      : props.width};
  height: ${(props) =>
    typeof props.height === 'number'
      ? props.height.toString() + 'px'
      : props.height};
  cursor: pointer;
  border-radius: 5px;
  padding: ${(props) => props.padding};
  color: ${colors.white};
  background-color: ${colors.blue500};
  &:hover {
    background-color: ${colors.blue600};
  }
`;

type Props = {
  handleSubmit: FormEventHandler<HTMLButtonElement>;
  text: string;
} & ButtonStyle<ButtonSizeUnit>;

export const SubmitButton: FC<Props> = ({
  text,
  width = '337px',
  height = '81px',
  padding = '28px 140px',
}) => {
  return (
    <StyledButton type="submit" width={width} height={height} padding={padding}>
      {text}
    </StyledButton>
  );
};
