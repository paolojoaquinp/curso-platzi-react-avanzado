import React from 'react';
import { Mutation } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

const MUTATION_LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`;

export const ToggleLikeMutation = ({ children }) => {
    return (
        <Mutation mutation={MUTATION_LIKE_PHOTO}>
            { children }
        </Mutation>
    )
}