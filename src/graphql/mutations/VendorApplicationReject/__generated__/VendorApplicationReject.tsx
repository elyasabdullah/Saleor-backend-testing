/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorApplicationRejectMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  rejectionReason?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type VendorApplicationRejectMutation = { vendorApplicationReject?: { success: boolean, vendorApplication?: { id: string, status: Types.VendorsVendorApplicationStatusChoices, reviewedAt?: any | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorApplicationRejectDocument = gql`
    mutation VendorApplicationReject($id: ID!, $rejectionReason: String) {
  vendorApplicationReject(id: $id, rejectionReason: $rejectionReason) {
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
export type VendorApplicationRejectMutationFn = Apollo.MutationFunction<VendorApplicationRejectMutation, VendorApplicationRejectMutationVariables>;

/**
 * __useVendorApplicationRejectMutation__
 *
 * To run a mutation, you first call `useVendorApplicationRejectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorApplicationRejectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorApplicationRejectMutation, { data, loading, error }] = useVendorApplicationRejectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      rejectionReason: // value for 'rejectionReason'
 *   },
 * });
 */
export function useVendorApplicationRejectMutation(baseOptions?: Apollo.MutationHookOptions<VendorApplicationRejectMutation, VendorApplicationRejectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorApplicationRejectMutation, VendorApplicationRejectMutationVariables>(VendorApplicationRejectDocument, options);
      }
export type VendorApplicationRejectMutationHookResult = ReturnType<typeof useVendorApplicationRejectMutation>;
export type VendorApplicationRejectMutationResult = Apollo.MutationResult<VendorApplicationRejectMutation>;
export type VendorApplicationRejectMutationOptions = Apollo.BaseMutationOptions<VendorApplicationRejectMutation, VendorApplicationRejectMutationVariables>;