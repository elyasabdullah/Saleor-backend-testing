/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { UserFieldsFragmentDoc } from '../../../fragments/UserFields/__generated__/UserFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PermissionsGrantToUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  permissionCodenames: Array<Types.InputMaybe<Types.Scalars['String']['input']>> | Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type PermissionsGrantToUserMutation = { permissionsGrantToUser?: { user?: { id: string, email: string, firstName: string, lastName: string, isStaff: boolean, isActive: boolean, role: Types.AccountsUserRoleChoices, accountType: Types.AccountsUserAccountTypeChoices, emailVerified: boolean, phoneNumber?: string | null, dateJoined: any, lastLogin?: any | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const PermissionsGrantToUserDocument = gql`
    mutation PermissionsGrantToUser($id: ID!, $permissionCodenames: [String]!) {
  permissionsGrantToUser(id: $id, permissionCodenames: $permissionCodenames) {
    user {
      ...UserFields
    }
    errors {
      field
      message
      code
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export type PermissionsGrantToUserMutationFn = Apollo.MutationFunction<PermissionsGrantToUserMutation, PermissionsGrantToUserMutationVariables>;

/**
 * __usePermissionsGrantToUserMutation__
 *
 * To run a mutation, you first call `usePermissionsGrantToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePermissionsGrantToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [permissionsGrantToUserMutation, { data, loading, error }] = usePermissionsGrantToUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      permissionCodenames: // value for 'permissionCodenames'
 *   },
 * });
 */
export function usePermissionsGrantToUserMutation(baseOptions?: Apollo.MutationHookOptions<PermissionsGrantToUserMutation, PermissionsGrantToUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PermissionsGrantToUserMutation, PermissionsGrantToUserMutationVariables>(PermissionsGrantToUserDocument, options);
      }
export type PermissionsGrantToUserMutationHookResult = ReturnType<typeof usePermissionsGrantToUserMutation>;
export type PermissionsGrantToUserMutationResult = Apollo.MutationResult<PermissionsGrantToUserMutation>;
export type PermissionsGrantToUserMutationOptions = Apollo.BaseMutationOptions<PermissionsGrantToUserMutation, PermissionsGrantToUserMutationVariables>;