import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

import { SubmitButton } from './SubmitButton';

const Section = styled.section`
  height: 89vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  border: 1px solid ${colors.grey400};
  width: 80%;
  height: 80%;
  border-radius: 15px;
  margin-top: 40px;
  padding: 2% 2%;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > input,
  textarea {
    border: 1px solid ${colors.grey400};
    border-radius: 5px;
    padding: 10px;

    font-size: 18px;
    color: ${colors.grey600};
    font-family: Georgia;
  }

  & > input::placeholder,
  textarea::placeholder {
    font-size: 18px;
    color: ${colors.grey600};
    font-family: Georgia;
  }
`;

const TitleInput = styled.input`
  height: 30px;
`;

const ContentsInput = styled.textarea`
  margin: 20px 0;
  height: 300px;
  resize: none;
  outline: 0;
  padding-top: 10px;
`;

const FileInput = styled.input`
  border: none !important;
  text-indent: 0px !important;
  padding: 1px 0px !important;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: end;
`;

/* const SubmitBtn = styled.button`
  color: ${colors.white};
  font-weight: 500;
  font-size: 18px;
  width: 180px;
  height: 40px;
  border: 1px solid #349eff;
  border-radius: 5px;
  background: #349eff;
  margin-top: 20px;
  &:hover {
    border: 1px solid #128bfa;
    background: #128bfa;
    transition: 0.5s;
  }
  transition: 0.5s;
  cursor: pointer;
`; */

export const ArticleForm: FC<PropsWithChildren> = () => {
  return (
    <Section>
      <Form>
        <InputWrap>
          <TitleInput type="text" name="title" placeholder="제목" />
          <ContentsInput name="content" placeholder="내용"></ContentsInput>
          <FileInput type="file" />
        </InputWrap>

        <BtnWrap>
          {/* <SubmitBtn> 글 올리기 </SubmitBtn> */}
          <SubmitButton> </SubmitButton>
        </BtnWrap>
      </Form>
    </Section>
  );
};
