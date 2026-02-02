/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TokenRevokeMutationVariables = Types.Exact<{
  refreshToken: Types.Scalars['String']['input'];
}>;


export type TokenRevokeMutation = { tokenRevoke?: { success: boolean, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const TokenRevokeDocument = gql`
    mutation TokenRevoke($refreshToken: String!) {
  tokenRevoke(refreshToken: $refreshToken) {
    success
    errors {
      field
      message
      code
    }
  }
}
    `;
export type TokenRevokeMutationFn = Apollo.MutationFunction<TokenRevokeMutation, TokenRevokeMutationVariables>;

/**
 * __useTokenRevokeMutation__
 *
 * To run a mutation, you first call `useTokenRevokeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenRevokeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenRevokeMutation, { data, loading, error }] = useTokenRevokeMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useTokenRevokeMutation(baseOptions?: Apollo.MutationHookOptions<TokenRevokeMutation, TokenRevokeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenRevokeMutation, TokenRevokeMutationVariables>(TokenRevokeDocument, options);
      }
export type TokenRevokeMutationHookResult = ReturnType<typeof useTokenRevokeMutation>;
export type TokenRevokeMutationResult = Apollo.MutationResult<TokenRevokeMutation>;
export type TokenRevokeMutationOptions = Apollo.BaseMutationOptions<TokenRevokeMutation, TokenRevokeMutationVariables>;