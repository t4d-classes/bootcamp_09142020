import * as React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const APP_QUERY = gql`
  query AppQuery {
    headerText
    colors {
      id
      name
    }
  }
`;

export type Color = { id: number, name: string };

export type AppQueryData = {
  headerText: string,
  colors: Color[],
};

export const App = () => {
  const { loading, data, error } = useQuery<AppQueryData>(APP_QUERY);

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
  </>;
};
