/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OtpSendMutationVariables = Types.Exact<{
  input: Types.OtpSendInput;
}>;


export type OtpSendMutation = { otpSend?: { success: boolean, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const OtpSendDocument = gql`
    mutation OTPSend($input: OTPSendInput!) {
  otpSend(input: $input) {
    success
    errors {
      field
      message
      code
    }
  }
}
    `;
export type OtpSendMutationFn = Apollo.MutationFunction<OtpSendMutation, OtpSendMutationVariables>;

/**
 * __useOtpSendMutation__
 *
 * To run a mutation, you first call `useOtpSendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOtpSendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [otpSendMutation, { data, loading, error }] = useOtpSendMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOtpSendMutation(baseOptions?: Apollo.MutationHookOptions<OtpSendMutation, OtpSendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OtpSendMutation, OtpSendMutationVariables>(OtpSendDocument, options);
      }
export type OtpSendMutationHookResult = ReturnType<typeof useOtpSendMutation>;
export type OtpSendMutationResult = Apollo.MutationResult<OtpSendMutation>;
export type OtpSendMutationOptions = Apollo.BaseMutationOptions<OtpSendMutation, OtpSendMutationVariables>;