import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

import { getArticle } from '../apis/article';
import thumbnail from '../assets/image/thumbnail.jpg';

import { ArticleModal } from './ArticleModal';

const Main = styled.main`
  margin: 20px 2%;
  display: flex;
`;

const CardList = styled.ul<{ cardnumber: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cardnumber}, 262px);
  justify-items: stretch;
  gap: 15px;
  margin: 0 auto;
  /* width: 60%; */
`;

const Card = styled.li`
  background-image: url(${thumbnail});
  height: 262px;
  border-radius: 10px;
  border: 1px solid #fff;
  display: flex;
  align-items: end;
  &:hover {
    transform: translateY(-7px);
  }
  transition: 0.5s;
  cursor: pointer;
`;

const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  color: ${colors.white};
  background-color: rgba(0, 0, 0, 20%);
  width: 100%;
  padding: 12px 13px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Writer = styled.span`
  font-size: 16px;
`;

const Wrap = styled.div`
  /* display: flex;
  justify-content: center; */
`;

type ArticleType = {
  title: string;
  author: string;
};

export const ArticleList = () => {
  const MainElement = useRef<HTMLElement>(null);

  const cardWidth = 262;

  const [cardNumber, setCardNumber] = useState(
    Math.floor(window.innerWidth / cardWidth)
  );
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleResize = () => {
    console.log(MainElement.current);
    if (MainElement.current) {
      const mainWidth = MainElement.current.offsetWidth;

      const gapSize = (Math.floor(mainWidth / cardWidth) - 1) * 15;
      setCardNumber(Math.floor((mainWidth - gapSize) / cardWidth));
    }
  };

  const handleClick = () => {
    setIsModalVisible((value) => !value);
  };

  useEffect(() => {
    // 윈도우에 리사이즈 이벤트와 함수를 등록한다.
    window.addEventListener('resize', handleResize);

    // 언마운트 될 때 리턴문 실행된다(등록된 이벤트와 함수를 제거한다).
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    getArticle()
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(isModalVisible);

  return (
    <Wrap>
      <Main ref={MainElement}>
        <CardList cardnumber={cardNumber}>
          {articles.map((article) => {
            return (
              <>
                <Card onClick={handleClick}>
                  <ListInfo>
                    <Title> {article.title} </Title>
                    <Writer> {article.author} </Writer>
                  </ListInfo>
                </Card>
                <ArticleModal
                  isModalVisible={isModalVisible}
                  setIsModalVisible={setIsModalVisible}
                  author={article.author}
                  title={article.title}
                  date={article.date}
                  content={article.content}
                />
              </>
            );
          })}
        </CardList>
      </Main>
    </Wrap>
  );
};
