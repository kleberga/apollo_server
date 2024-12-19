import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        welcome: String
        atracoes: [Atracoes]
    }

    type Atracoes {
        id: Float
        nome: String
        latitude: Float
        longitude: Float
        cor: String
    }

    type Mutation {
        createAtracao(Atracoes: createAtracaoInput): Atracoes!
        updateAtracao(Atracoes: updateAtracaoInput): Atracoes!
        deleteAtracao(id: String): String
    }

    input createAtracaoInput {
        nome: String
        latitude: Float
        longitude: Float
        cor: String
    }
        
    input updateAtracaoInput {
        id: Float
        nome: String!
        latitude: Float!
        longitude: Float!
        cor: String!
    }
`;

export default typeDefs;