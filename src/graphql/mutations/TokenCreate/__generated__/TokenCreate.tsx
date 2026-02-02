/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TokenCreateMutationVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type TokenCreateMutation = { tokenCreate?: { token?: string | null, refreshToken?: string | null, csrfToken?: string | null, user?: { id: string, firstName: string, lastName: string, email: string, role: Types.AccountsUserRoleChoices, isActive: boolean, emailVerified: boolean } | null, errors: Array<{ field?: string | null, message?: string | null, code: Types.AccountErrorCode }> } | null };


export const TokenCreateDocument = gql`
    mutation TokenCreate($email: String!, $password: String!) {
  tokenCreate(email: $email, password: $password) {
    token
    refreshToken
    csrfToken
    user {
      id
      firstName
      lastName
      email
      role
      isActive
      emailVerified
    }
    errors {
      field
      message
      code
    }
  }
}
    `;
export type TokenCreateMutationFn = Apollo.MutationFunction<TokenCreateMutation, TokenCreateMutationVariables>;

/**
 * __useTokenCreateMutation__
 *
 * To run a mutation, you first call `useTokenCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenCreateMutation, { data, loading, error }] = useTokenCreateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useTokenCreateMutation(baseOptions?: Apollo.MutationHookOptions<TokenCreateMutation, TokenCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenCreateMutation, TokenCreateMutationVariables>(TokenCreateDocument, options);
      }
export type TokenCreateMutationHookResult = ReturnType<typeof useTokenCreateMutation>;
export type TokenCreateMutationResult = Apollo.MutationResult<TokenCreateMutation>;
export type TokenCreateMutationOptions = Apollo.BaseMutationOptions<TokenCreateMutation, TokenCreateMutationVariables>;