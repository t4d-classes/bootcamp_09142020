import React, { memo } from "react";

export type ToolHeaderProps = {
  headerText: string;
};

export function ToolHeader(props: ToolHeaderProps) {
  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );
}

export const ToolHeaderMemo = memo(ToolHeader);
