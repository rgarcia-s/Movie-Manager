import styled from 'styled-components';

export const FullContainer = styled.div`
  background: #1b1a1f;

  .main-carousel {
    margin-top: 32px;

    .slide {
      background: #1b1a1f;
    }
  }

  .main-carousel-div {
    margin: 0 16px;

    img {
      border-radius: 10px;
    }

    .carousel-info-div {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0));
      position: absolute;
      top: calc(100% - 100px);
      width: calc(100% - 32px);
      height: 100px;
      border-radius: 0 0 10px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px;

      strong {
        font-size: 20px;
      }

      i {
        margin-top: 8px;
      }
    }
  }
`;

export const HeaderBG = styled.section`
  width: 100%;
  height: 90px;
  background: #151421;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  max-width: calc(100% - 64px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  #logo {
    height: 60px;
    margin-right: 24px;
  }

  #tmdb {
    height: 27px;
  }

  input {
    background: #3b3a3f;
    outline: none;
    border: none;
    border-radius: 10px;
    width: 450px;
    height: 40px;
    padding: 0 16px;

    color: #e5e5e5;

    &::placeholder {
      color: #a3a3a3;
    }
  }

  a {
    text-decoration: none;
    color: #e5e5e5;
    font-size: 18px;
    font-weight: 700;

    &:nth-last-child(1) {
      margin-left: 24px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  max-width: calc(100% - 64px);

  margin: 0 16px;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    margin-top: 48px;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const FooterBG = styled.footer`
  background: #151421;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  max-width: calc(100% - 64px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  svg {
    margin-left: 16px;
  }
`;
