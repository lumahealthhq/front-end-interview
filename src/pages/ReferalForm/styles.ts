import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 782px;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
  margin-top: 34px;

  h4 {
    margin: 8px 0 32px 0;
  }
`;

export const TransparentButton = styled.button`
  border: 0;
  background: transparent;
  font-size: 14px;
  margin: 12px 0 40px 0;
`;
