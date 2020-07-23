import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

const handleColorType = (patient: number): string => {
  switch (patient) {
    case 1:
      return '#25a575';
    case 2:
      return '#2595a5';
    case 3:
      return '#3a719b';
    case 4:
      return '#254b7a';
    case 5:
      return '#142b58';
    default:
      return '#25a575';
  }
};

interface ContainerProps {
  isToggled?: boolean;
  patientSeq: number;
}

export const Container = styled(Form)<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
  width: 100%;

  & + form {
    margin-top: 8px;
  }
  overflow: hidden;
  transition: height 0.6s ease;

  ${props =>
    props.isToggled
      ? css`
          height: 380px;
        `
      : css`
          height: 64px;
        `}
`;

export const FormHeader = styled.div<ContainerProps>`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 64px;
    background: ${({ patientSeq }) => handleColorType(patientSeq)};
    h2 {
      color: #fff;
    }
  }

  strong {
    flex: 1;
    margin-left: 16px;
    color: #3a719b;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
  }
`;

export const FormFields = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  padding: 0 56px 0 56px;

  overflow: hidden;
  transition: max-height 0.6s ease;
`;
