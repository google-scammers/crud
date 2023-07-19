import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { colors } from 'constants/colors';

import thumbnail from '../assets/image/thumbnail.jpg';

const Main = styled.main`
  padding: 20px 2%;
`;

const CardList = styled.ul<{ cardnumber: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cardnumber}, 1fr);
  justify-items: center;
  gap: 15px;
`;

const Crard = styled.li`
  background-image: url(${thumbnail});
  width: 262px;
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

const ListInfro = styled.div`
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

export const ArticleList = () => {
  const MainElement = useRef<HTMLElement>(null);

  const cardWidth = 262;

  const [cardNumber, setCardNumber] = useState(0);``

  const handleResize = () => {
    if (MainElement.current) {
      setCardNumber(Math.floor(MainElement.current.offsetWidth / cardWidth));
    }
  };

  console.log(cardNumber);

  useEffect(() => {
    // 윈도우에 리사이즈 이벤트와 함수를 등록한다.
    window.addEventListener('resize', handleResize);

    // 언마운트 될 때 리턴문 실행된다(등록된 이벤트와 함수를 제거한다).
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Main ref={MainElement}>
      <CardList cardnumber={cardNumber}>
        <Crard>
          <ListInfro>
            <Title> 제목 </Title>
            <Writer> 작성자 </Writer>
          </ListInfro>
        </Crard>
        <Crard>
          <ListInfro>
            <Title> 제목 </Title>
            <Writer> 작성자 </Writer>
          </ListInfro>
        </Crard>
        <Crard>
          <ListInfro>
            <Title> 제목 </Title>
            <Writer> 작성자 </Writer>
          </ListInfro>
        </Crard>
        <Crard>
          <ListInfro>
            <Title> 제목 </Title>
            <Writer> 작성자 </Writer>
          </ListInfro>
        </Crard>
        <Crard>
          <ListInfro>
            <Title> 제목 </Title>
            <Writer> 작성자 </Writer>
          </ListInfro>
        </Crard>
        <Crard>
          <ListInfro>
            <Title> 제목 </Title>
            <Writer> 작성자 </Writer>
          </ListInfro>
        </Crard>
        <Crard>
          <ListInfro>
            <Title> 제목 </Title>
            <Writer> 작성자 </Writer>
          </ListInfro>
        </Crard>
      </CardList>
    </Main>
  );
};
