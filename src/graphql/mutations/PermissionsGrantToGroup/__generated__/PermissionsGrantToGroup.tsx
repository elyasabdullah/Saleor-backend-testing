/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PermissionsGrantToGroupMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  permissionCodenames: Array<Types.InputMaybe<Types.Scalars['String']['input']>> | Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type PermissionsGrantToGroupMutation = { permissionsGrantToGroup?: { group?: { id: string, name: string } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const PermissionsGrantToGroupDocument = gql`
    mutation PermissionsGrantToGroup($id: ID!, $permissionCodenames: [String]!) {
  permissionsGrantToGroup(id: $id, permissionCodenames: $permissionCodenames) {
    group {
      id
      name
    }
    errors {
      field
      message
      code
    }
  }
}
    `;
export type PermissionsGrantToGroupMutationFn = Apollo.MutationFunction<PermissionsGrantToGroupMutation, PermissionsGrantToGroupMutationVariables>;

/**
 * __usePermissionsGrantToGroupMutation__
 *
 * To run a mutation, you first call `usePermissionsGrantToGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePermissionsGrantToGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [permissionsGrantToGroupMutation, { data, loading, error }] = usePermissionsGrantToGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      permissionCodenames: // value for 'permissionCodenames'
 *   },
 * });
 */
export function usePermissionsGrantToGroupMutation(baseOptions?: Apollo.MutationHookOptions<PermissionsGrantToGroupMutation, PermissionsGrantToGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PermissionsGrantToGroupMutation, PermissionsGrantToGroupMutationVariables>(PermissionsGrantToGroupDocument, options);
      }
export type PermissionsGrantToGroupMutationHookResult = ReturnType<typeof usePermissionsGrantToGroupMutation>;
export type PermissionsGrantToGroupMutationResult = Apollo.MutationResult<PermissionsGrantToGroupMutation>;
export type PermissionsGrantToGroupMutationOptions = Apollo.BaseMutationOptions<PermissionsGrantToGroupMutation, PermissionsGrantToGroupMutationVariables>;