/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PermissionsRevokeFromGroupMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  permissionCodenames: Array<Types.InputMaybe<Types.Scalars['String']['input']>> | Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type PermissionsRevokeFromGroupMutation = { permissionsRevokeFromGroup?: { group?: { id: string, name: string } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const PermissionsRevokeFromGroupDocument = gql`
    mutation PermissionsRevokeFromGroup($id: ID!, $permissionCodenames: [String]!) {
  permissionsRevokeFromGroup(id: $id, permissionCodenames: $permissionCodenames) {
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
export type PermissionsRevokeFromGroupMutationFn = Apollo.MutationFunction<PermissionsRevokeFromGroupMutation, PermissionsRevokeFromGroupMutationVariables>;

/**
 * __usePermissionsRevokeFromGroupMutation__
 *
 * To run a mutation, you first call `usePermissionsRevokeFromGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePermissionsRevokeFromGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [permissionsRevokeFromGroupMutation, { data, loading, error }] = usePermissionsRevokeFromGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      permissionCodenames: // value for 'permissionCodenames'
 *   },
 * });
 */
export function usePermissionsRevokeFromGroupMutation(baseOptions?: Apollo.MutationHookOptions<PermissionsRevokeFromGroupMutation, PermissionsRevokeFromGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PermissionsRevokeFromGroupMutation, PermissionsRevokeFromGroupMutationVariables>(PermissionsRevokeFromGroupDocument, options);
      }
export type PermissionsRevokeFromGroupMutationHookResult = ReturnType<typeof usePermissionsRevokeFromGroupMutation>;
export type PermissionsRevokeFromGroupMutationResult = Apollo.MutationResult<PermissionsRevokeFromGroupMutation>;
export type PermissionsRevokeFromGroupMutationOptions = Apollo.BaseMutationOptions<PermissionsRevokeFromGroupMutation, PermissionsRevokeFromGroupMutationVariables>;