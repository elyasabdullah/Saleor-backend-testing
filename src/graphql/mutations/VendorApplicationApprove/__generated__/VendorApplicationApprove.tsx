/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorApplicationApproveMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type VendorApplicationApproveMutation = { vendorApplicationApprove?: { success: boolean, vendorApplication?: { id: string, status: Types.VendorsVendorApplicationStatusChoices, reviewedAt?: any | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorApplicationApproveDocument = gql`
    mutation VendorApplicationApprove($id: ID!) {
  vendorApplicationApprove(id: $id) {
    success
    vendorApplication {
      id
      status
      reviewedAt
    }
    errors {
      field
      message
      code
    }
  }
}
    `;
export type VendorApplicationApproveMutationFn = Apollo.MutationFunction<VendorApplicationApproveMutation, VendorApplicationApproveMutationVariables>;

/**
 * __useVendorApplicationApproveMutation__
 *
 * To run a mutation, you first call `useVendorApplicationApproveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorApplicationApproveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorApplicationApproveMutation, { data, loading, error }] = useVendorApplicationApproveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVendorApplicationApproveMutation(baseOptions?: Apollo.MutationHookOptions<VendorApplicationApproveMutation, VendorApplicationApproveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorApplicationApproveMutation, VendorApplicationApproveMutationVariables>(VendorApplicationApproveDocument, options);
      }
export type VendorApplicationApproveMutationHookResult = ReturnType<typeof useVendorApplicationApproveMutation>;
export type VendorApplicationApproveMutationResult = Apollo.MutationResult<VendorApplicationApproveMutation>;
export type VendorApplicationApproveMutationOptions = Apollo.BaseMutationOptions<VendorApplicationApproveMutation, VendorApplicationApproveMutationVariables>;