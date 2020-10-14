import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';

import GlobalStyle from '@/styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
