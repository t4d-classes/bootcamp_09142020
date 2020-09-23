import * as React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import { Car, NewCar } from './models/car';
import { CarForm } from './components/CarForm';

const APP_QUERY = gql`
  query AppQuery {
    headerText
    colors {
      id
      name
    }
    cars {
      id
      make
      model
      year
      color
      price
    }
  }
`;

const APPEND_CAR_MUTATION = gql`
  mutation AppendCar($car: AppendCar) {
    appendCar(car: $car) {
      id
      make
      model
      year
      color
      price
    }
  }
`;

export type Color = { id: number, name: string };

export type AppQueryData = {
  headerText: string,
  colors: Color[],
  cars: Car[],
};

export const App = () => {
  const { loading, data, error } = useQuery<AppQueryData>(APP_QUERY);

  const [ mutateAppendCar ] = useMutation(APPEND_CAR_MUTATION);

  const appendCar = (car: NewCar) => {

    mutateAppendCar({
      variables: { car },
      refetchQueries: [ { query: APP_QUERY } ],
    });
  };

  if (loading) {
    return <div>Loading!</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

return <>
    <h1>{data!.headerText}</h1>
    <ul>
      {data?.colors.map(c => <li key={c.id}>{c.name}</li>)}
    </ul>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data?.cars.map(c => <tr key={c.id}>
          <td>{c.id}</td>
          <td>{c.make}</td>
          <td>{c.model}</td>
          <td>{c.year}</td>
          <td>{c.color}</td>
          <td>{c.price}</td>
        </tr>)}
      </tbody>
    </table>
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;
};
