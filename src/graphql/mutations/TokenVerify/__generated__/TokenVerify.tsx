/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TokenVerifyMutationVariables = Types.Exact<{
  accessToken: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
}>;


export type TokenVerifyMutation = { tokenVerify?: { isValid: boolean, errors: Array<{ field?: string | null, message?: string | null, code: Types.AccountErrorCode }> } | null };


export const TokenVerifyDocument = gql`
    mutation TokenVerify($accessToken: String!, $token: String!) {
  tokenVerify(accessToken: $accessToken, token: $token) {
    isValid
    errors {
      field
      message
      code
    }
  }
}
    `;
export type TokenVerifyMutationFn = Apollo.MutationFunction<TokenVerifyMutation, TokenVerifyMutationVariables>;

/**
 * __useTokenVerifyMutation__
 *
 * To run a mutation, you first call `useTokenVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenVerifyMutation, { data, loading, error }] = useTokenVerifyMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useTokenVerifyMutation(baseOptions?: Apollo.MutationHookOptions<TokenVerifyMutation, TokenVerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenVerifyMutation, TokenVerifyMutationVariables>(TokenVerifyDocument, options);
      }
export type TokenVerifyMutationHookResult = ReturnType<typeof useTokenVerifyMutation>;
export type TokenVerifyMutationResult = Apollo.MutationResult<TokenVerifyMutation>;
export type TokenVerifyMutationOptions = Apollo.BaseMutationOptions<TokenVerifyMutation, TokenVerifyMutationVariables>;