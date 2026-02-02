/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorApplicationCreateMutationVariables = Types.Exact<{
  input: Types.VendorApplicationCreateInput;
}>;


export type VendorApplicationCreateMutation = { vendorApplicationCreate?: { success: boolean, vendorApplication?: { id: string, status: Types.VendorsVendorApplicationStatusChoices, createdAt: any } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorApplicationCreateDocument = gql`
    mutation VendorApplicationCreate($input: VendorApplicationCreateInput!) {
  vendorApplicationCreate(input: $input) {
    success
    vendorApplication {
      id
      status
      createdAt
    }
    errors {
      field
      message
      code
    }
  }
}
    `;
export type VendorApplicationCreateMutationFn = Apollo.MutationFunction<VendorApplicationCreateMutation, VendorApplicationCreateMutationVariables>;

/**
 * __useVendorApplicationCreateMutation__
 *
 * To run a mutation, you first call `useVendorApplicationCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorApplicationCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorApplicationCreateMutation, { data, loading, error }] = useVendorApplicationCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVendorApplicationCreateMutation(baseOptions?: Apollo.MutationHookOptions<VendorApplicationCreateMutation, VendorApplicationCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorApplicationCreateMutation, VendorApplicationCreateMutationVariables>(VendorApplicationCreateDocument, options);
      }
export type VendorApplicationCreateMutationHookResult = ReturnType<typeof useVendorApplicationCreateMutation>;
export type VendorApplicationCreateMutationResult = Apollo.MutationResult<VendorApplicationCreateMutation>;
export type VendorApplicationCreateMutationOptions = Apollo.BaseMutationOptions<VendorApplicationCreateMutation, VendorApplicationCreateMutationVariables>;