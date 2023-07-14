import { styled } from 'styled-components';

import { colors } from 'constants/colors';

import thumbnail from '../assets/image/thumbnail.jpg';

const Main = styled.main`
  padding: 20px 2%;
`;

const Wrap = styled.div``;

const Article = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const List = styled.li`
  background-image: url(${thumbnail});
  width: 262px;
  height: 262px;
  border-radius: 10px;
  border: 1px solid #fff;
  display: flex;
  align-items: end;
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
`;

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Writer = styled.span`
  font-size: 16px;
`;

export const ArticleList = () => {
  return (
    <Main>
      <Wrap>
        <Article>
          <List>
            <ListInfro>
              <Title> 제목 </Title>
              <Writer> 작성자 </Writer>
            </ListInfro>
          </List>

          <List>
            <ListInfro>
              <Title> 제목 </Title>
              <Writer> 작성자 </Writer>
            </ListInfro>
          </List>

          <List>
            <ListInfro>
              <Title> 제목 </Title>
              <Writer> 작성자 </Writer>
            </ListInfro>
          </List>

          <List>
            <ListInfro>
              <Title> 제목 </Title>
              <Writer> 작성자 </Writer>
            </ListInfro>
          </List>

          <List>
            <ListInfro>
              <Title> 제목 </Title>
              <Writer> 작성자 </Writer>
            </ListInfro>
          </List>

          <List>
            <ListInfro>
              <Title> 제목 </Title>
              <Writer> 작성자 </Writer>
            </ListInfro>
          </List>

          <List>
            <ListInfro>
              <Title> 제목 </Title>
              <Writer> 작성자 </Writer>
            </ListInfro>
          </List>

          <List>
            <ListInfro>
              <Title> 제목 </Title>
              <Writer> 작성자 </Writer>
            </ListInfro>
          </List>
        </Article>
      </Wrap>
    </Main>
  );
};
