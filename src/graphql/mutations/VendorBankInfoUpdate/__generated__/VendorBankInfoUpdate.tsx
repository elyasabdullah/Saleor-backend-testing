/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorBankInfoUpdateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  input: Types.VendorBankInfoUpdateInput;
}>;


export type VendorBankInfoUpdateMutation = { vendorBankInfoUpdate?: { vendorBankInfo?: { id: string, accountName?: string | null, accountNumber: string, bankName: string, iban: string, vendor: { id: string, name: string } } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorBankInfoUpdateDocument = gql`
    mutation VendorBankInfoUpdate($id: ID!, $input: VendorBankInfoUpdateInput!) {
  vendorBankInfoUpdate(id: $id, input: $input) {
    vendorBankInfo {
      id
      accountName
      accountNumber
      bankName
      iban
      vendor {
        id
        name
      }
    }
    errors {
      field
      message
      code
    }
  }
}
    `;
export type VendorBankInfoUpdateMutationFn = Apollo.MutationFunction<VendorBankInfoUpdateMutation, VendorBankInfoUpdateMutationVariables>;

/**
 * __useVendorBankInfoUpdateMutation__
 *
 * To run a mutation, you first call `useVendorBankInfoUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorBankInfoUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorBankInfoUpdateMutation, { data, loading, error }] = useVendorBankInfoUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVendorBankInfoUpdateMutation(baseOptions?: Apollo.MutationHookOptions<VendorBankInfoUpdateMutation, VendorBankInfoUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorBankInfoUpdateMutation, VendorBankInfoUpdateMutationVariables>(VendorBankInfoUpdateDocument, options);
      }
export type VendorBankInfoUpdateMutationHookResult = ReturnType<typeof useVendorBankInfoUpdateMutation>;
export type VendorBankInfoUpdateMutationResult = Apollo.MutationResult<VendorBankInfoUpdateMutation>;
export type VendorBankInfoUpdateMutationOptions = Apollo.BaseMutationOptions<VendorBankInfoUpdateMutation, VendorBankInfoUpdateMutationVariables>;