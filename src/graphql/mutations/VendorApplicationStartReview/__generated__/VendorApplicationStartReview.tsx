/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorApplicationStartReviewMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type VendorApplicationStartReviewMutation = { vendorApplicationStartReview?: { success: boolean, vendorApplication?: { id: string, status: Types.VendorsVendorApplicationStatusChoices, reviewedAt?: any | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorApplicationStartReviewDocument = gql`
    mutation VendorApplicationStartReview($id: ID!) {
  vendorApplicationStartReview(id: $id) {
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
export type VendorApplicationStartReviewMutationFn = Apollo.MutationFunction<VendorApplicationStartReviewMutation, VendorApplicationStartReviewMutationVariables>;

/**
 * __useVendorApplicationStartReviewMutation__
 *
 * To run a mutation, you first call `useVendorApplicationStartReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorApplicationStartReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorApplicationStartReviewMutation, { data, loading, error }] = useVendorApplicationStartReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVendorApplicationStartReviewMutation(baseOptions?: Apollo.MutationHookOptions<VendorApplicationStartReviewMutation, VendorApplicationStartReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorApplicationStartReviewMutation, VendorApplicationStartReviewMutationVariables>(VendorApplicationStartReviewDocument, options);
      }
export type VendorApplicationStartReviewMutationHookResult = ReturnType<typeof useVendorApplicationStartReviewMutation>;
export type VendorApplicationStartReviewMutationResult = Apollo.MutationResult<VendorApplicationStartReviewMutation>;
export type VendorApplicationStartReviewMutationOptions = Apollo.BaseMutationOptions<VendorApplicationStartReviewMutation, VendorApplicationStartReviewMutationVariables>;