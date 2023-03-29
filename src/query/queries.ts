import { ApolloClientResponse, Character } from "@/types/characters";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

export const getAllCharacters = async (page = 1) => {
  return await client.query<ApolloClientResponse>({
      query: gql`
        query characters {
          characters(page: ${page}) {
            results {
              id
              name
              status
              species
              gender
              image
              origin {
                name
                dimension
              }
            }
          }
        }
      `,
  });
};

export const getFilteredCharacters = async (page = 1, filter: string) => {
  return await client.query<any>({
    query: gql`
      query {
        characters (page: ${page}, filter: { name: "${filter}" }) {
          results {
            id
            name
            status
            species
            gender
            image
            origin {
              name
              dimension
            }
          }
        }
      }
    `
  });
}

export const getCharacter = async (characterId: string | string[] | undefined = '1') => {
  return await client.query<{ character: Character }>({
    query: gql`
      query character {
        character(id: ${characterId}) {
          id
          name
          status
          species
          gender
          image
          origin {
            name
            dimension
          }
        }
      }
    `,
    });
}

 