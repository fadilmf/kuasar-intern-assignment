import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries($searchTerm: String!) {
    countries(filter: { name: { regex: $searchTerm } }) {
      name
      emoji
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;
