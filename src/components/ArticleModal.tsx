import { FC, MouseEvent } from 'react';
import { styled } from 'styled-components';

const StyledModalBackground = styled.div<{ isModalVisible: boolean }>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.isModalVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;
const StyledClose = styled.button`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
};

export const ArticleModal: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <StyledModalBackground
      isModalVisible={isModalVisible}
      onClick={() => setIsModalVisible(!isModalVisible)}
    >
      <div
        style={{
          width: '976px',
          height: '537px',
          position: 'relative',
          borderRadius: '15px',
          backgroundColor: 'white',
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <StyledClose
          onClick={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          close
        </StyledClose>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            height: '100%',
          }}
        >
          <div></div>
          <div></div>
        </div>
      </div>
    </StyledModalBackground>
  );
};
