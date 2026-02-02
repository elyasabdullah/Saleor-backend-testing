/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { VendorFieldsFragmentDoc } from '../../../fragments/VendorFields/__generated__/VendorFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorUpdateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  input: Types.VendorUpdateInput;
}>;


export type VendorUpdateMutation = { vendorUpdate?: { vendor?: { id: string, name: string, description?: string | null, logo: string, isActive: boolean, createdAt: any, updatedAt: any, owner?: { id: string, email: string, firstName: string, lastName: string } | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorUpdateDocument = gql`
    mutation VendorUpdate($id: ID!, $input: VendorUpdateInput!) {
  vendorUpdate(id: $id, input: $input) {
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
export type VendorUpdateMutationFn = Apollo.MutationFunction<VendorUpdateMutation, VendorUpdateMutationVariables>;

/**
 * __useVendorUpdateMutation__
 *
 * To run a mutation, you first call `useVendorUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorUpdateMutation, { data, loading, error }] = useVendorUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVendorUpdateMutation(baseOptions?: Apollo.MutationHookOptions<VendorUpdateMutation, VendorUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorUpdateMutation, VendorUpdateMutationVariables>(VendorUpdateDocument, options);
      }
export type VendorUpdateMutationHookResult = ReturnType<typeof useVendorUpdateMutation>;
export type VendorUpdateMutationResult = Apollo.MutationResult<VendorUpdateMutation>;
export type VendorUpdateMutationOptions = Apollo.BaseMutationOptions<VendorUpdateMutation, VendorUpdateMutationVariables>;