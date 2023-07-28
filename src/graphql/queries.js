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
  query getAuthorInfo($slug: String!) {
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

const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      title
      id
      image {
        url
      }
      dateCreatedAt
      author {
        avatar {
          url
        }
        field
        name
        slug
      }
      content {
        html
      }
    }
  }
`;

const GET_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      body
      id
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_BLOG_INFO,
  GET_COMMENTS,
};
