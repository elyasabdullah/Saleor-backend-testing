/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VendorBankInfoCreateMutationVariables = Types.Exact<{
  input: Types.VendorBankInfoInput;
  vendorId: Types.Scalars['ID']['input'];
}>;


export type VendorBankInfoCreateMutation = { vendorBankInfoCreate?: { success: boolean, vendorBankInfo?: { id: string, accountName?: string | null, accountNumber: string, bankName: string, iban: string, vendor: { id: string, name: string } } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const VendorBankInfoCreateDocument = gql`
    mutation VendorBankInfoCreate($input: VendorBankInfoInput!, $vendorId: ID!) {
  vendorBankInfoCreate(input: $input, vendorId: $vendorId) {
    success
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
export type VendorBankInfoCreateMutationFn = Apollo.MutationFunction<VendorBankInfoCreateMutation, VendorBankInfoCreateMutationVariables>;

/**
 * __useVendorBankInfoCreateMutation__
 *
 * To run a mutation, you first call `useVendorBankInfoCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVendorBankInfoCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vendorBankInfoCreateMutation, { data, loading, error }] = useVendorBankInfoCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *      vendorId: // value for 'vendorId'
 *   },
 * });
 */
export function useVendorBankInfoCreateMutation(baseOptions?: Apollo.MutationHookOptions<VendorBankInfoCreateMutation, VendorBankInfoCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VendorBankInfoCreateMutation, VendorBankInfoCreateMutationVariables>(VendorBankInfoCreateDocument, options);
      }
export type VendorBankInfoCreateMutationHookResult = ReturnType<typeof useVendorBankInfoCreateMutation>;
export type VendorBankInfoCreateMutationResult = Apollo.MutationResult<VendorBankInfoCreateMutation>;
export type VendorBankInfoCreateMutationOptions = Apollo.BaseMutationOptions<VendorBankInfoCreateMutation, VendorBankInfoCreateMutationVariables>;