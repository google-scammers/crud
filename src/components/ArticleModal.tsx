import { FC, MouseEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

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
const StyledButton = styled.button`
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
  title: string;
  author: string;
  content: string;
  created_at: Date;
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
};

export const ArticleModal: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  image = null,
  author,
  title,
  created_at,
  content,
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgroundRef.current)
      backgroundRef.current.style.opacity = isModalVisible ? '1' : '0';

    const delayDisplayChange = setTimeout(() => {
      if (backgroundRef.current)
        backgroundRef.current.style.display = isModalVisible ? 'flex' : 'none';
    }, TRANSITION_DURATION * 1000);
    return () => {
      clearTimeout(delayDisplayChange);
    };
  }, [isModalVisible]);

  return (
    <StyledModalBackground
      ref={backgroundRef}
      isModalVisible={isModalVisible}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.opacity = '0';
        setIsModalVisible(!isModalVisible);
      }}
    >
      <StyledModal
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <StyledControlBox>
          <StyledButton>edit</StyledButton>
          <StyledButton
            onClick={() => {
              if (backgroundRef.current) {
                backgroundRef.current.style.opacity = '0';
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
            <StyledDate>{created_at.toString()}</StyledDate>
            <StyledContent>{content}</StyledContent>
          </StyledRight>
        </div>
      </StyledModal>
    </StyledModalBackground>
  );
};
