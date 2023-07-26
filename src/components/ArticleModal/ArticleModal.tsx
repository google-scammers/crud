import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user';

import { Article, deleteArticle } from '../../apis/article';

import * as S from './ArticleModal.style';

// time unit = 200ms (0.2s)
// const TRANSITION_DURATION = 0.2;
// const RESPONSIVE_BREAK_POINT = '1900px';
//
// const StyledModalBackground = styled.div<{ ismodalvisible: string }>`
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 10;
//   position: fixed;
//   display: flex;
//   background-color: rgba(0, 0, 0, 0.3);
//   opacity: ${(props) => (props.ismodalvisible === 'true' ? '1' : '0')};
//   align-items: center;
//   justify-content: center;
//   transition: ${TRANSITION_DURATION.toString() + 's all ease-out 0s'};
//   padding: 0 15px;
// `;
// const StyledModal = styled.div`
//   width: 976px;
//   height: 537px;
//   position: relative;
//   border-radius: 10px;
//   background-color: white;
//   padding: 42px;
//   box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 0.75);
//   @media (max-width: ${RESPONSIVE_BREAK_POINT}) {
//     width: 500px;
//     height: 600px;
//   }
// `;
// const StyledModalHeader = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 10px;
//   display: flex;
//   gap: 10px;
// `;
// const StyledModalBody = styled.div`
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   scrollbar-width: none;
//
//   overflow: scroll;
//
//   height: 100%;
// `;
// const DeleteButtonWrapper = styled.div`
//   position: absolute;
//   right: 10px;
//   bottom: 10px;
//   display: flex;
// `;
// const StyledButton = styled.button`
//   color: ${colors.grey500};
//   cursor: pointer;
//   transition: 0.2s all ease-in-out 0s;
//   &:hover {
//     opacity: 0.5;
//   }
// `;
// const StyledLeft = styled.div<{ image: string | null }>`
//   border-radius: 10px;
//   background-image: url(${(props) => (props.image ? props.image : thumbnail)});
//   background-position: center;
//   background-size: cover;
//   /* background-size: 100%; */
//   @media (max-width: ${RESPONSIVE_BREAK_POINT}) {
//     height: 75%;
//   }
// `;
// const StyledRight = styled.div`
//   margin-left: 42px;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   @media (max-width: ${RESPONSIVE_BREAK_POINT}) {
//     margin-left: 5px;
//     margin-top: 20px;
//     align-items: baseline;
//   }
// `;
// const StyledTitle = styled.h1`
//   font-size: 20px;
//   font-weight: bold;
// `;
// const StyledAuthor = styled.span``;
// const StyledDate = styled.span``;
// const StyledContent = styled.p``;

type Props = {
  image?: string;
  article: Article;
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  setIsDeleteArticle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ArticleModal: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  image = null,
  article,
  setIsDeleteArticle,
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { title, author, created_at: createdAt, content } = article;
  const user = useRecoilValue(userState);
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);

  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}-${month}-${day}`;

  const handleClickDelete = () => {
    deleteArticle(article.id)
      .then(() => {
        setIsDeleteArticle((value) => !value);
        setIsModalVisible(!isModalVisible);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.overflowY = isModalVisible ? 'hidden' : 'visible';
    document.body.style.position = isModalVisible ? 'fixed' : 'inherit';
    document.body.style.width = isModalVisible ? '100%' : 'auto';

    if (isModalVisible && backgroundRef.current && scrollY) {
      setWindowScrollY(scrollY);
      document.body.style.top = '-' + String(scrollY) + 'px';
    } else if (!isModalVisible) {
      document.body.style.top = '0px';
      setWindowScrollY(0);
      window.scrollTo({ behavior: 'instant', top: windowScrollY });
    }

    if (backgroundRef.current) {
      backgroundRef.current.style.opacity = isModalVisible ? '1' : '0';
    }

    const delayDisplayChange = setTimeout(
      () => {
        if (backgroundRef.current)
          backgroundRef.current.style.display = isModalVisible
            ? 'flex'
            : 'none';
      },
      isModalVisible ? 0 : S.TRANSITION_DURATION * 1000
    );
    return () => {
      clearTimeout(delayDisplayChange);
    };
  }, [isModalVisible]);

  const controlEditButtonVisibility = () => {
    if (user?.email === author)
      return (
        <S.Button
          onClick={() => {
            setIsModalVisible(false);
            navigate(`/crud/modify/?id=${article.id}`, {
              state: article,
            });
          }}
        >
          edit
        </S.Button>
      );
    return null;
  };

  return (
    <S.ModalBackground
      ref={backgroundRef}
      ismodalvisible={String(isModalVisible)}
      onClick={() => {
        setIsModalVisible(!isModalVisible);
      }}
    >
      <S.Modal
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <S.ModalHeader>
          {controlEditButtonVisibility()}
          <S.Button
            onClick={() => {
              if (backgroundRef.current) {
                setIsModalVisible(!isModalVisible);
              }
            }}
          >
            close
          </S.Button>
        </S.ModalHeader>
        <S.ModalBody>
          <S.Left image={image} />
          <S.Right>
            <S.Title>{title}</S.Title>
            <S.Author>{author}</S.Author>
            <S.Date>{formattedDate}</S.Date>
            <S.Content>{content}</S.Content>
          </S.Right>
        </S.ModalBody>
        {article.author === user?.email ? (
          <S.DeleteButtonWrapper>
            <S.Button onClick={handleClickDelete}>
              <BsFillTrashFill />
            </S.Button>
          </S.DeleteButtonWrapper>
        ) : null}
      </S.Modal>
    </S.ModalBackground>
  );
};
