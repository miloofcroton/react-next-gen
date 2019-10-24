import React from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from 'services/clocks/data/actions';
import Examples from '../../services/clocks/components/Examples';
import MainLayout from 'style/layouts/Main';

const UserIndex = ({ dispatch }) => {

  let timer;

  React.useEffect(() => {
    timer = startClock(dispatch);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MainLayout title="A Random Clock and Counter Example">
      <Examples />
    </MainLayout>
  );
};

UserIndex.getInitialProps = ({ reduxStore, req }) => {
  const isServer = !!req;
  reduxStore.dispatch(serverRenderClock(isServer));

  return {};
};

export default connect()(UserIndex);
