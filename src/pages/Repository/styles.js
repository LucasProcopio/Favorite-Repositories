import styled, { css } from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  a {
    color: #456990;
    font-size: 16px;
    text-decoration: none;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  filter: ${props => props.filter === 'true' && 'blur(8px)'};
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #555;

          &:hover {
            color: #456990;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }

  filter: ${props => props.filter === 'true' && 'blur(8px)'};
`;

export const Filter = styled.div`
  position: absolute;
  z-index: 10;
  top: 5%;
  right: -130px;
  width: 125px;
  height: 155px;
  max-width: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: -4px 4px 6px #ccc;
  transition: right 0.3s ease-in;

  .open-close-btn {
    position: absolute;
    background: #fff;
    width: 40px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: -20px;
    color: #456990;
    transform: translate(-50%, -50%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-left: 1px solid #456990;
    border-top: 1px solid #456990;
    border-bottom: 1px solid #456990;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      color: #fff;
      background: #456990;
    }
  }

  ul {
    list-style: none;

    li {
      color: #456990;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 5px 10px;
      button {
        border: 0;
        background: #fff;
      }
      & + li {
        margin-top: 15px;
      }
    }
  }

  ${props =>
    props.filter === 'true' &&
    css`
      right: 0;

      ul > li {
        transition: all 0.2s linear;
        &:hover {
          border: #456990 1px solid;
        }
      }
      .open-close-btn {
        box-shadow: -5px 2px 5px #ccc;
        border: 0;
        &:hover {
          color: #456990;
          background: #fff;
        }
      }
    `}
`;
