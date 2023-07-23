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

const GET_AUTHORS_INFO = gql`
  query MyQuery {
    authors {
      avatar {
        url
      }
      id
      name
      slug
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query GetAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      name
      id
      posts {
        image {
          url
        }
        title
        slug
        id
      }
      field
      avatar {
        url
      }
      description {
        html
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
