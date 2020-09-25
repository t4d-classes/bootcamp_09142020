import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import { unstable_trace as trace } from "scheduler/tracing";

import { Car } from "./models/Car";

import { CarTool } from "./components/CarTool";

import "./index.css";

const carList: Car[] = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hydrid",
    year: 2020,
    color: "blue",
    price: 45000,
  },
  { id: 2, make: "Tesla", model: "S", year: 2019, color: "red", price: 120000 },
];

trace("initial render", performance.now(), () =>
  ReactDOM.render(
    <Profiler id="CarTool" onRender={(...p: any[]) => console.log(p)}>
      <CarTool cars={carList} />
    </Profiler>,
    document.querySelector("#root")
  )
);
