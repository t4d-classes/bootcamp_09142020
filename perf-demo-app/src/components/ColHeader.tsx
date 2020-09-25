import React, { memo } from "react";

import { CarsSort } from "../models/CarsSort";
import { Car } from "../models/Car";

export type ColHeaderProps = {
  carsSort: CarsSort;
  col: keyof Car;
  caption: string;
  onClick: (col: keyof Car) => void;
};

export function ColHeader(props: ColHeaderProps) {
  return (
    <th onClick={() => props.onClick(props.col)}>
      {props.caption}
      {props.carsSort.col === props.col && <span>({props.carsSort.dir})</span>}
    </th>
  );
}

export const ColHeaderMemo = memo(ColHeader);
