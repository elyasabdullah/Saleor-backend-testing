/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { VendorFieldsFragmentDoc } from '../../../fragments/VendorFields/__generated__/VendorFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorDeactivateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type VendorDeactivateMutation = { vendorDeactivate?: { vendor?: { id: string, name: string, description?: string | null, logo: string, isActive: boolean, createdAt: any, updatedAt: any, owner?: { id: string, email: string, firstName: string, lastName: string } | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorDeactivateDocument = gql`
    mutation VendorDeactivate($id: ID!) {
  vendorDeactivate(id: $id) {
    vendor {
      ...VendorFields
    }
    errors {
      field
      message
      code
    }
  }
}
    ${VendorFieldsFragmentDoc}`;
export type VendorDeactivateMutationFn = Apollo.MutationFunction<VendorDeactivateMutation, VendorDeactivateMutationVariables>;

/**
 * __useVendorDeactivateMutation__
 *
 * To run a mutation, you first call `useVendorDeactivateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorDeactivateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorDeactivateMutation, { data, loading, error }] = useVendorDeactivateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVendorDeactivateMutation(baseOptions?: Apollo.MutationHookOptions<VendorDeactivateMutation, VendorDeactivateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorDeactivateMutation, VendorDeactivateMutationVariables>(VendorDeactivateDocument, options);
      }
export type VendorDeactivateMutationHookResult = ReturnType<typeof useVendorDeactivateMutation>;
export type VendorDeactivateMutationResult = Apollo.MutationResult<VendorDeactivateMutation>;
export type VendorDeactivateMutationOptions = Apollo.BaseMutationOptions<VendorDeactivateMutation, VendorDeactivateMutationVariables>;