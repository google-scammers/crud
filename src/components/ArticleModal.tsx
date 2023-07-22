import { FC, MouseEvent, useEffect, useRef } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

import { Article, deleteArticle } from '../apis/article';
import thumbnail from '../assets/image/thumbnail.jpg';

// time unit = 200ms (0.2s)
const TRANSITION_DURATION = 0.2;

const StyledModalBackground = styled.div<{ isModalVisible: boolean }>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: absolute;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.isModalVisible ? '1' : '0')};
  align-items: center;
  justify-content: center;
  transition: ${TRANSITION_DURATION.toString() + 's all ease-out 0s'};
`;
const StyledModal = styled.div`
  width: 976px;
  height: 537px;
  position: relative;
  border-radius: 10px;
  background-color: white;
  padding: 42px;
  box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 0.75);
`;
const StyledControlBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  gap: 10px;
`;
const DeleteButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
`;
const StyledButton = styled.button`
  color: ${colors.grey500};
  cursor: pointer;
  transition: 0.2s all ease-in-out 0s;
  &:hover {
    opacity: 0.5;
  }
`;
const StyledLeft = styled.div<{ image: string | null }>`
  border-radius: 10px;
  background-image: url(${(props) => (props.image ? props.image : thumbnail)});
  background-position: center;
  background-size: cover;
`;
const StyledRight = styled.div`
  margin-left: 42px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
const StyledAuthor = styled.span``;
const StyledDate = styled.span``;
const StyledContent = styled.p``;

type Props = {
  image?: string;
  article: Article;
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
};

export const ArticleModal: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  image = null,
  article,
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { title, author, created_at: createdAt, content } = article;

  const handleClickDelete = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      deleteArticle(article.id, token)
        .then(() => {
          setIsModalVisible(!isModalVisible);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (backgroundRef.current)
      backgroundRef.current.style.opacity = isModalVisible ? '1' : '0';

    const delayDisplayChange = setTimeout(
      () => {
        if (backgroundRef.current)
          backgroundRef.current.style.display = isModalVisible
            ? 'flex'
            : 'none';
      },
      isModalVisible ? 0 : TRANSITION_DURATION * 1000
    );
    return () => {
      clearTimeout(delayDisplayChange);
    };
  }, [isModalVisible]);

  return (
    <StyledModalBackground
      ref={backgroundRef}
      isModalVisible={isModalVisible}
      onClick={() => {
        setIsModalVisible(!isModalVisible);
      }}
    >
      <StyledModal
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <StyledControlBox>
          <StyledButton
            onClick={() => {
              navigate('/crud/modify', {
                state: article,
              });
            }}
          >
            edit
          </StyledButton>
          <StyledButton
            onClick={() => {
              if (backgroundRef.current) {
                setIsModalVisible(!isModalVisible);
              }
            }}
          >
            close
          </StyledButton>
        </StyledControlBox>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            height: '100%',
          }}
        >
          <StyledLeft image={image} />
          <StyledRight>
            <StyledTitle>{title}</StyledTitle>
            <StyledAuthor>{author}</StyledAuthor>
            <StyledDate>{createdAt.toString()}</StyledDate>
            <StyledContent>{content}</StyledContent>
          </StyledRight>
        </div>
        <DeleteButtonWrapper>
          <StyledButton onClick={handleClickDelete}>
            <BsFillTrashFill />
          </StyledButton>
        </DeleteButtonWrapper>
      </StyledModal>
    </StyledModalBackground>
  );
};
