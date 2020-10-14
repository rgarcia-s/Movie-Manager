import styled from 'styled-components';

export const MovieArea = styled.div`
  margin-top: 8px;
  overflow-x: hidden;
  padding-left: 32px;

  .movie-item {
    display: inline-block;
    width: 250px;

    img {
      width: 100%;
      min-height: 375px;
      border-radius: 10px;
      cursor: pointer;
      transform: scale(0.9);
      transition: all ease 0.3s;

      &:hover {
        transform: scale(1);
      }
    }
  }

  .movie-row {
    transition: all ease 0.5s;
  }

  button {
    position: absolute;
    width: 46px;
    height: 375px;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    outline: none;
    border: none;
  }

  .movie-left {
    left: 0;
    border-radius: 10px 0 0 10px;
  }

  .movie-right {
    right: 0;
    border-radius: 0 10px 10px 0;
  }

  &:hover button {
    opacity: 1;
  }
`;
