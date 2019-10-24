import React from 'react';
import CarsOverview from 'services/cars/components/Overview';
import Layout from 'style/layouts/main';
import { mockCars } from 'services/cars/data/mocks';

const CarsPage = () => {
  return (
    <Layout>
      <CarsOverview cars={mockCars} />
    </Layout>
  );
};

export default CarsPage;
