import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    headerText: () => 'The Tools',
    colors: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/colors`)
        .then(res => res.json());
    },
    color: (_, args, { restURL }) => {
      return fetch(`${restURL}/colors/${encodeURIComponent(args.colorId)}`)
        .then(res => res.json());
    },
    cars: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/cars`)
        .then(res => res.json());
    },
    car: (_, { carId }, { restURL }) => {
      return fetch(`${restURL}/cars/${encodeURIComponent(carId)}`)
        .then(res => res.json());
    },
  },
  Mutation: {
    appendCar: async (_, args, context) => {

      const res = await fetch(`${context.restURL}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.car),
      });

      const appendedCar = await res.json();

      const res2 = await fetch(`${context.restURL}/cars/${encodeURIComponent(appendedCar.id)}`);

      const car = await res2.json();

      return car;

    },
  },
};