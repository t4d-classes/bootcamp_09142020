export const typeDefs = `
  type Query {
    message: String
    headerText: String
    colors: [Color]
    cars: [Car]
    color(colorId: ID): Color
    car(carId: ID): Car
  }

  type Mutation {
    appendCar(car: AppendCar): Car
  }

  input AppendCar {
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  input ReplaceCar {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }

  type Car {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }  
`;
