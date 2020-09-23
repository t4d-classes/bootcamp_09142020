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
};