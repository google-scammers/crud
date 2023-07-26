import { styled } from 'styled-components';

import thumbnail from '../../assets/image/thumbnail.jpg';
import { colors } from '../../constants/colors';

export const TRANSITION_DURATION = 0.2;
export const RESPONSIVE_BREAK_POINT = '1900px';

export const ModalBackground = styled.div<{ ismodalvisible: string }>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.ismodalvisible === 'true' ? '1' : '0')};
  align-items: center;
  justify-content: center;
  transition: ${TRANSITION_DURATION.toString() + 's all ease-out 0s'};
  padding: 0 15px;
`;
export const Modal = styled.div`
  width: 976px;
  height: 537px;
  position: relative;
  border-radius: 10px;
  background-color: white;
  padding: 42px;
  box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 0.75);
  @media (max-width: ${RESPONSIVE_BREAK_POINT}) {
    width: 500px;
    height: 600px;
  }
`;
export const ModalHeader = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  gap: 10px;
`;
export const ModalBody = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  overflow: scroll;

  height: 100%;
`;
export const DeleteButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
`;
export const Button = styled.button`
  color: ${colors.grey500};
  cursor: pointer;
  transition: 0.2s all ease-in-out 0s;
  &:hover {
    opacity: 0.5;
  }
`;
export const Left = styled.div<{ image: string | null }>`
  border-radius: 10px;
  background-image: url(${(props) => (props.image ? props.image : thumbnail)});
  background-position: center;
  background-size: cover;
  /* background-size: 100%; */
  @media (max-width: ${RESPONSIVE_BREAK_POINT}) {
    height: 75%;
  }
`;
export const Right = styled.div`
  margin-left: 42px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: ${RESPONSIVE_BREAK_POINT}) {
    margin-left: 5px;
    margin-top: 20px;
    align-items: baseline;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
export const Author = styled.span``;
export const Date = styled.span``;
export const Content = styled.p``;
