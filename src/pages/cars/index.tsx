import React from 'react';
import CarsOverview from 'services/cars/components/Overview';
import MainLayout from 'style/layouts/Main';
import { mockCars } from 'services/cars/data/mocks';

const CarsPage = () => {
  return (
    <MainLayout>
      <CarsOverview cars={mockCars} />
    </MainLayout>
  );
};

export default CarsPage;
