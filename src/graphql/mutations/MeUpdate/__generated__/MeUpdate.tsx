/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { UserFieldsFragmentDoc } from '../../../fragments/UserFields/__generated__/UserFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MeUpdateMutationVariables = Types.Exact<{
  input: Types.UserUpdateInput;
}>;


export type MeUpdateMutation = { meUpdate?: { user?: { id: string, email: string, firstName: string, lastName: string, isStaff: boolean, isActive: boolean, role: Types.AccountsUserRoleChoices, accountType: Types.AccountsUserAccountTypeChoices, emailVerified: boolean, phoneNumber?: string | null, dateJoined: any, lastLogin?: any | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const MeUpdateDocument = gql`
    mutation MeUpdate($input: UserUpdateInput!) {
  meUpdate(input: $input) {
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
export type MeUpdateMutationFn = Apollo.MutationFunction<MeUpdateMutation, MeUpdateMutationVariables>;

/**
 * __useMeUpdateMutation__
 *
 * To run a mutation, you first call `useMeUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meUpdateMutation, { data, loading, error }] = useMeUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMeUpdateMutation(baseOptions?: Apollo.MutationHookOptions<MeUpdateMutation, MeUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeUpdateMutation, MeUpdateMutationVariables>(MeUpdateDocument, options);
      }
export type MeUpdateMutationHookResult = ReturnType<typeof useMeUpdateMutation>;
export type MeUpdateMutationResult = Apollo.MutationResult<MeUpdateMutation>;
export type MeUpdateMutationOptions = Apollo.BaseMutationOptions<MeUpdateMutation, MeUpdateMutationVariables>;