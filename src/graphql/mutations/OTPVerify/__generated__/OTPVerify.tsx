/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OtpVerifyMutationVariables = Types.Exact<{
  input: Types.OtpVerifyInput;
}>;


export type OtpVerifyMutation = { otpVerify?: { success: boolean, token?: string | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const OtpVerifyDocument = gql`
    mutation OTPVerify($input: OTPVerifyInput!) {
  otpVerify(input: $input) {
    success
    token
    errors {
      field
      message
      code
    }
  }
}
    `;
export type OtpVerifyMutationFn = Apollo.MutationFunction<OtpVerifyMutation, OtpVerifyMutationVariables>;

/**
 * __useOtpVerifyMutation__
 *
 * To run a mutation, you first call `useOtpVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOtpVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [otpVerifyMutation, { data, loading, error }] = useOtpVerifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOtpVerifyMutation(baseOptions?: Apollo.MutationHookOptions<OtpVerifyMutation, OtpVerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OtpVerifyMutation, OtpVerifyMutationVariables>(OtpVerifyDocument, options);
      }
export type OtpVerifyMutationHookResult = ReturnType<typeof useOtpVerifyMutation>;
export type OtpVerifyMutationResult = Apollo.MutationResult<OtpVerifyMutation>;
export type OtpVerifyMutationOptions = Apollo.BaseMutationOptions<OtpVerifyMutation, OtpVerifyMutationVariables>;