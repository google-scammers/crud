import { FC, FormEvent, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

/* import { colors } from "constants/colors"; */

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa;
  border-radius: 15px;
  width: 524px;
  height: 617px;
  padding-top: 80px;
`;

const Title = styled.h2`
  text-align: center;
  display: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 14px;
  position: relative;
`;

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const AuthForm: FC<PropsWithChildren<Props>> = ({
  children,
  handleSubmit,
}) => {
  return (
    <Section>
      <Wrap>
        <Title> Login </Title>

        <Form onSubmit={handleSubmit}>{children}</Form>
      </Wrap>
    </Section>
  );
};
