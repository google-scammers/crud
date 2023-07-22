import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

const TextButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
  color: ${colors.grey600};
  font-weight: 500;
`;

type Props = {
  text: string;
};

export const TextButton = ({ text }: Props) => {
  return (
    <TextButtonWrapper>
      <Link to="/crud/login">{text}</Link>
    </TextButtonWrapper>
  );
};
