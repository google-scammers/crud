import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

/* import { colors } from "constants/colors"; */

const Section = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 14px;
  position: relative;
`;

export const AuthForm: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Section>
      <Wrap>
        <Title> Login </Title>

        <Form>{children}</Form>
      </Wrap>
    </Section>
  );
};
