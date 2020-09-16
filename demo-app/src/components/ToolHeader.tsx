import React from 'react';

export type ToolHeaderProps = {
  headerText: string,
};

export function ToolHeader(props: ToolHeaderProps) {

  console.log('rendering tool header');

  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );

}