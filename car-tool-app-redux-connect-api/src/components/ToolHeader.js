import React, { memo } from 'react';

export const ToolHeader = memo(({ headerText }) => {

  console.log('rendered tool header');

  return <header>
    <h1>{headerText}</h1>
  </header>;

});
