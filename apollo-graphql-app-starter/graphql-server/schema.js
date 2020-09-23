export const typeDefs = `
  type Query {
    message: String
    headerText: String
    colors: [Color]
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }
`;
