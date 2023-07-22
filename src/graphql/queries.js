import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query MyQuery {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      image {
        url
      }
      slug
      title
      id
    }
  }
`;

export { GET_BLOGS_INFO };
