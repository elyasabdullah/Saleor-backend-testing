/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorDeleteMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type VendorDeleteMutation = { vendorDelete?: { success: boolean, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorDeleteDocument = gql`
    mutation VendorDelete($id: ID!) {
  vendorDelete(id: $id) {
    success
    errors {
      field
      message
      code
    }
  }
}
    `;
export type VendorDeleteMutationFn = Apollo.MutationFunction<VendorDeleteMutation, VendorDeleteMutationVariables>;

/**
 * __useVendorDeleteMutation__
 *
 * To run a mutation, you first call `useVendorDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorDeleteMutation, { data, loading, error }] = useVendorDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVendorDeleteMutation(baseOptions?: Apollo.MutationHookOptions<VendorDeleteMutation, VendorDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorDeleteMutation, VendorDeleteMutationVariables>(VendorDeleteDocument, options);
      }
export type VendorDeleteMutationHookResult = ReturnType<typeof useVendorDeleteMutation>;
export type VendorDeleteMutationResult = Apollo.MutationResult<VendorDeleteMutation>;
export type VendorDeleteMutationOptions = Apollo.BaseMutationOptions<VendorDeleteMutation, VendorDeleteMutationVariables>;