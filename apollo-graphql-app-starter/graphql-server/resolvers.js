import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    headerText: () => 'The Tools',
    colors: () => {

      return fetch('http://localhost:3040/colors')
        .then(res => res.json());

    },
  },
};