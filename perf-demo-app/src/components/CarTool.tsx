import React, { useState, useCallback } from "react";
import { unstable_trace as trace } from "scheduler/tracing";

import { Car } from "../models/Car";
import { CarsSort } from "../models/CarsSort";
// import { ToolHeader } from "./ToolHeader";
import { ToolHeaderMemo as ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
// import { CarForm, CarFormData } from "./CarForm";
import { CarFormMemo as CarForm, CarFormData } from "./CarForm";

export type CarToolProps = {
  cars: Car[];
};

const sortedCars = (cars: Car[], carsSort: CarsSort) => {
  return cars.concat().sort((a: Car, b: Car) => {
    const left = String(a[carsSort.col]).toUpperCase();
    const right = String(b[carsSort.col]).toUpperCase();

    if (left < right) {
      return carsSort.dir === "asc" ? -1 : 1;
    } else if (left > right) {
      return carsSort.dir === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });
};

export function CarTool(props: CarToolProps) {
  const [cars, setCars] = useState(props.cars.concat());
  const [carsSort, setCarsSort] = useState<CarsSort>({
    col: "id",
    dir: "asc",
  });
  const [editCarId, setEditCarId] = useState(-1);

  const addCar = useCallback(
    function addCar(carForm: CarFormData) {
      trace("addCar button click", performance.now(), () => {
        setCars(
          cars.concat({
            ...carForm,
            id: Math.max(...cars.map((c) => c.id), 0) + 1,
          })
        );
        setEditCarId(-1);
      });
    },
    [cars]
  );

  const saveCar = (car: Car) => {
    trace("saveCar button click", performance.now(), () => {
      const carIndex = cars.findIndex((c) => c.id === car.id);
      if (carIndex >= 0) {
        const newCars = cars.concat();
        newCars[carIndex] = car;
        setCars(newCars);
      }
      setEditCarId(-1);
    });
  };

  const deleteCar = useCallback(
    function deleteCar(carId: number) {
      trace("deleteCar button click", performance.now(), () => {
        setCars(cars.filter((c) => c.id !== carId));
        setEditCarId(-1);
      });
    },
    [cars]
  );

  const editCar = useCallback(function editCar(carId: number) {
    trace("editCar button click", performance.now(), () => {
      setEditCarId(carId);
    });
  }, []);

  const cancelCar = () => {
    trace("cancelCar button click", performance.now(), () => {
      setEditCarId(-1);
    });
  };

  const sortCars = useCallback(
    function sortCars(col: keyof Car) {
      trace("sortCars button click", performance.now(), () => {
        if (col === carsSort.col) {
          setCarsSort({
            col,
            dir: "asc" === carsSort.dir ? "desc" : "asc",
          });
        } else {
          setCarsSort({
            col,
            dir: "asc",
          });
        }
      });
    },
    [carsSort]
  );

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={sortedCars(cars, carsSort)}
        carsSort={carsSort}
        editCarId={editCarId}
        onEditCar={editCar}
        onDeleteCar={deleteCar}
        onSaveCar={saveCar}
        onCancelCar={cancelCar}
        onSortCars={sortCars}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}
