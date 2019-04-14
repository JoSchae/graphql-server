export default `
  type User {
    _id: String!
    name: String!
    email: String!
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(_id: String!, user: UpdateUserInput!): User!
    deleteUser(_id: String!): User!
  }

  input CreateUserInput {
    name: String!
    email:String!
  }

  input UpdateUserInput {
    name: String
    email: String
  }
`;