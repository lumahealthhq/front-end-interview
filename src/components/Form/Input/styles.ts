import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isfullWidth?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding-bottom: 6px;

  border-bottom: 1px solid #3A719B;
  color: #3A719B;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
    color: #B8C7CC;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0b2b5b;
      border-color: #0b2b5b;
      svg {
        color: #3a719b;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #3a719b;

      svg {
        color: #3a719b;
      }

      span {
        visibility: hidden;
      }
    `}

    ${props =>
      !props.isfullWidth &&
      css`
        width: 319px;
      `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #0B2B5B;

    &::placeholder {
      color: #3A719B;
    }
  }
  span {
    color: red;
  }
`;
