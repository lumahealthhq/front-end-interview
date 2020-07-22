import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled(Form)`
  display: flex;
  width: 782px;
  height: 380px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  overflow: hidden;
`;

export const FormHeader = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #25a575;
    width: 40px;
    height: 64px;

    h2 {
      color: #fff;
    }
  }

  strong {
    margin-left: 16px;
    color: #3a719b;
  }
`;

export const FormFields = styled.div`
  height: 318px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  padding: 32px 56px 24px 56px;
`;
