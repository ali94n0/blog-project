import { gql } from "@apollo/client";

const POST_COMMENT = gql`
  mutation postComment(
    $name: String!
    $email: String!
    $body: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        body: $body
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;
export { POST_COMMENT };
