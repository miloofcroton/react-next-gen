import React from 'react';
import { Car, CarList } from '../data/types';

export interface CarsOverviewProps {
  cars?: CarList;
}

export interface CarsOverviewState {
  selectedCar: Car;
}

export default class CarsOverview extends React.Component<
  CarsOverviewProps,
  CarsOverviewState
> {
  constructor(props: CarsOverviewProps) {
    super(props);

    this.state = {
      selectedCar: null,
    };
  }

  handleSelectCar = (car: Car): void => {
    this.setState({ selectedCar: car });
  }

  renderCarsList = (cars?: CarList): JSX.Element => {
    if (!cars || cars.length === 0) {
      return <p>No cars</p>;
    }

    return (
      <ul>
        {cars.map(
          (car: Car, index: number): JSX.Element => (
            <li key={index} onClick={() => this.handleSelectCar(car)}>
              {car.make} {car.model}
            </li>
          )
        )}
      </ul>
    );
  }

  renderCarInfo = (car: Car): JSX.Element => {
    if (!car) {
      return null;
    }

    return (
      <div className="CarInfo">
        <h2>{`${car.make} ${car.model}`}</h2>
        <section>{car.engine}</section>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Cars Overview</h1>

        <div className="Cars__List">{this.renderCarsList(this.props.cars)}</div>

        {this.renderCarInfo(this.state.selectedCar)}
      </div>
    );
  }
}
