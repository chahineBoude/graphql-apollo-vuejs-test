export const typeDefs = `#graphql
    type User {
        id: ID!
        prenom: String!
        nom: String!
        email: String!
    }
    type Query {
        users: [User]
        user(id: ID!): User
    }
    type Mutation {
        createUser(prenom: String!, nom: String!, email:String!): User
        modifyName(id: ID!, prenom:String!): User
        deleteUser(id: ID!): ID!
    }
`;
