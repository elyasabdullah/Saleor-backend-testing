/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { UserFieldsFragmentDoc } from '../../../fragments/UserFields/__generated__/UserFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserUpdateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  input: Types.AdminUserUpdateInput;
}>;


export type UserUpdateMutation = { userUpdate?: { user?: { id: string, email: string, firstName: string, lastName: string, isStaff: boolean, isActive: boolean, role: Types.AccountsUserRoleChoices, accountType: Types.AccountsUserAccountTypeChoices, emailVerified: boolean, phoneNumber?: string | null, dateJoined: any, lastLogin?: any | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const UserUpdateDocument = gql`
    mutation UserUpdate($id: ID!, $input: AdminUserUpdateInput!) {
  userUpdate(id: $id, input: $input) {
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
export type UserUpdateMutationFn = Apollo.MutationFunction<UserUpdateMutation, UserUpdateMutationVariables>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdateMutation, UserUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(UserUpdateDocument, options);
      }
export type UserUpdateMutationHookResult = ReturnType<typeof useUserUpdateMutation>;
export type UserUpdateMutationResult = Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>;