import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: #0b2b5b;
  border: 0;
  background: transparent;
  /* font-size: 16px; */
  margin-left: 16px;

  &:hover {
    color: ${shade(0.2, '#0B2B5B')};
  }
`;
