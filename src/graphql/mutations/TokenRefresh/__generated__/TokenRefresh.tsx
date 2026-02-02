/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TokenRefreshMutationVariables = Types.Exact<{
  refreshToken?: Types.InputMaybe<Types.Scalars['String']['input']>;
  csrfToken?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type TokenRefreshMutation = { tokenRefresh?: { token?: string | null, errors: Array<{ field?: string | null, message?: string | null, code: Types.AccountErrorCode }> } | null };


export const TokenRefreshDocument = gql`
    mutation TokenRefresh($refreshToken: String, $csrfToken: String) {
  tokenRefresh(refreshToken: $refreshToken, csrfToken: $csrfToken) {
    token
    errors {
      field
      message
      code
    }
  }
}
    `;
export type TokenRefreshMutationFn = Apollo.MutationFunction<TokenRefreshMutation, TokenRefreshMutationVariables>;

/**
 * __useTokenRefreshMutation__
 *
 * To run a mutation, you first call `useTokenRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenRefreshMutation, { data, loading, error }] = useTokenRefreshMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *      csrfToken: // value for 'csrfToken'
 *   },
 * });
 */
export function useTokenRefreshMutation(baseOptions?: Apollo.MutationHookOptions<TokenRefreshMutation, TokenRefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenRefreshMutation, TokenRefreshMutationVariables>(TokenRefreshDocument, options);
      }
export type TokenRefreshMutationHookResult = ReturnType<typeof useTokenRefreshMutation>;
export type TokenRefreshMutationResult = Apollo.MutationResult<TokenRefreshMutation>;
export type TokenRefreshMutationOptions = Apollo.BaseMutationOptions<TokenRefreshMutation, TokenRefreshMutationVariables>;