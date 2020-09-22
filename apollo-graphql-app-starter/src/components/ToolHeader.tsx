import React from 'react';

export type ToolHeaderProps = {
  headerText: string,
};

export const ToolHeader =({ headerText }: ToolHeaderProps) => {

  return <header>
    <h1>{headerText}</h1>
  </header>;

};

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};
