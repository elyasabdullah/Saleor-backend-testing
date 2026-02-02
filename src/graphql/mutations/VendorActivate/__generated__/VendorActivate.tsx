/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { VendorFieldsFragmentDoc } from '../../../fragments/VendorFields/__generated__/VendorFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorActivateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type VendorActivateMutation = { vendorActivate?: { vendor?: { id: string, name: string, description?: string | null, logo: string, isActive: boolean, createdAt: any, updatedAt: any, owner?: { id: string, email: string, firstName: string, lastName: string } | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorActivateDocument = gql`
    mutation VendorActivate($id: ID!) {
  vendorActivate(id: $id) {
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
export type VendorActivateMutationFn = Apollo.MutationFunction<VendorActivateMutation, VendorActivateMutationVariables>;

/**
 * __useVendorActivateMutation__
 *
 * To run a mutation, you first call `useVendorActivateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorActivateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorActivateMutation, { data, loading, error }] = useVendorActivateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVendorActivateMutation(baseOptions?: Apollo.MutationHookOptions<VendorActivateMutation, VendorActivateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorActivateMutation, VendorActivateMutationVariables>(VendorActivateDocument, options);
      }
export type VendorActivateMutationHookResult = ReturnType<typeof useVendorActivateMutation>;
export type VendorActivateMutationResult = Apollo.MutationResult<VendorActivateMutation>;
export type VendorActivateMutationOptions = Apollo.BaseMutationOptions<VendorActivateMutation, VendorActivateMutationVariables>;