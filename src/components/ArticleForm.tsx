import { useState, FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

import { SubmitButton } from './SubmitButton';

const Section = styled.section`
  height: 88vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  border: 1px solid ${colors.grey400};
  width: 80%;
  height: 83%;
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
  height: 43vh;
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

type Article = {
  title: string | number;
  content: string | number;
};

export const ArticleForm: FC<PropsWithChildren> = () => {
  const [articleData, setArticleData] = useState<Article>({
    title: '',
    content: '',
  });

  const handleSubmit = () => {};

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setArticleData({
      ...articleData,
      [name]: value,
    });
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <InputWrap>
          <TitleInput
            type="text"
            name="title"
            placeholder="제목"
            onChange={onChange}
          />
          <ContentsInput
            name="content"
            placeholder="내용"
            onChange={onChange}
          ></ContentsInput>
          <FileInput type="file" />
        </InputWrap>

        <BtnWrap>
          <SubmitButton
            text={'글 올리기'}
            width={'25%'}
            height={'60px'}
            padding={''}
          />
        </BtnWrap>
      </Form>
    </Section>
  );
};
