import React, { FC, memo } from 'react';

export interface ToolHeaderProps {
  headerText?: string;
}

export const ToolHeader: FC<ToolHeaderProps> = memo(({ headerText }) => {

  console.log('tool header being rendered');

  return(
    <header>
      <h1>{headerText}</h1>
    </header>
  );

});

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};