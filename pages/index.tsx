import type { GetServerSideProps, NextPage } from 'next';

import PathEnum from 'paths';

const Index: NextPage = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const isLogin = false;
  return {
    redirect: {
      permanent: false,
      destination: isLogin ? PathEnum.CAKE.pathname : PathEnum.SIGN_IN.pathname,
    },
    props: {} as never,
  };
};

export default Index;
