/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { VendorFieldsFragmentDoc } from '../../../fragments/VendorFields/__generated__/VendorFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorCreateMutationVariables = Types.Exact<{
  input: Types.VendorCreateInput;
  ownerId: Types.Scalars['ID']['input'];
}>;


export type VendorCreateMutation = { vendorCreate?: { vendor?: { id: string, name: string, description?: string | null, logo: string, isActive: boolean, createdAt: any, updatedAt: any, owner?: { id: string, email: string, firstName: string, lastName: string } | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorCreateDocument = gql`
    mutation VendorCreate($input: VendorCreateInput!, $ownerId: ID!) {
  vendorCreate(input: $input, ownerId: $ownerId) {
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
export type VendorCreateMutationFn = Apollo.MutationFunction<VendorCreateMutation, VendorCreateMutationVariables>;

/**
 * __useVendorCreateMutation__
 *
 * To run a mutation, you first call `useVendorCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorCreateMutation, { data, loading, error }] = useVendorCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useVendorCreateMutation(baseOptions?: Apollo.MutationHookOptions<VendorCreateMutation, VendorCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorCreateMutation, VendorCreateMutationVariables>(VendorCreateDocument, options);
      }
export type VendorCreateMutationHookResult = ReturnType<typeof useVendorCreateMutation>;
export type VendorCreateMutationResult = Apollo.MutationResult<VendorCreateMutation>;
export type VendorCreateMutationOptions = Apollo.BaseMutationOptions<VendorCreateMutation, VendorCreateMutationVariables>;