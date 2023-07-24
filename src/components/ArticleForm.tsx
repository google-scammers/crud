import { Article, modifyArticle, uploadArticle } from 'apis/article';
import { FC, PropsWithChildren, FormEvent, useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

import { SubmitButton } from './SubmitButton';

type ArticleModifyData = Pick<Article, 'id' | 'title' | 'content'>;

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

export const ArticleForm: FC<PropsWithChildren> = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as ArticleModifyData | null;

  const [formState, setFormState] = useState<ArticleModifyData | undefined>(
    locationState ? locationState : undefined
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (location.pathname === '/crud/modify/' && formState) {
      modifyArticle(formState.id, formData)
        .then(() => {
          navigate('/crud');
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (user) {
      formData.append('author', user?.email);
      uploadArticle(formData)
        .then(() => {
          navigate('/crud');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <InputWrap>
          <TitleInput
            type="text"
            name="title"
            placeholder="제목"
            value={formState && formState.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              formState &&
              setFormState({ ...formState, title: e.currentTarget.value })
            }
          />
          <ContentsInput
            name="content"
            placeholder="내용"
            value={formState && formState.content}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              formState &&
                setFormState({ ...formState, content: e.currentTarget.value });
            }}
          ></ContentsInput>
          <FileInput type="file" disabled />
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
