import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  color: #fff;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error === 'true' ? '#FF3366' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading === 'true',
}))`
  background: #456990;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }

  ${props =>
    props.loading === 'true' &&
    css`
      svg {
        animation: ${rotate} linear infinite 2s;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      text-decoration: none;
      border: 1px solid #456990;
      background: #fff;
      border-radius: 4px;
      padding: 7px;
      color: #456990;

      &:hover {
        color: #fff;
        background: #456990;
      }

      transition: all 0.2s ease-in-out;
    }
  }
`;
