/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { BranchFieldsFragmentDoc } from '../../../fragments/BranchFields/__generated__/BranchFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BranchDeactivateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type BranchDeactivateMutation = { branchDeactivate?: { branch?: { id: string, name: string, nameAr?: string | null, description: string, type?: Types.BranchesBranchTypeChoices | null, isActive: boolean, isMarketplaceEnabled: boolean, contactPhoneNumber?: string | null, contactEmail?: string | null, streetAddress1: string, streetAddress2: string, area: string, district: string, region: string, postalCode: string, createdAt: any, updatedAt: any, vendor: { id: string, name: string }, manager?: { id: string, email: string, firstName: string, lastName: string } | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const BranchDeactivateDocument = gql`
    mutation BranchDeactivate($id: ID!) {
  branchDeactivate(id: $id) {
    branch {
      ...BranchFields
    }
    errors {
      field
      message
      code
    }
  }
}
    ${BranchFieldsFragmentDoc}`;
export type BranchDeactivateMutationFn = Apollo.MutationFunction<BranchDeactivateMutation, BranchDeactivateMutationVariables>;

/**
 * __useBranchDeactivateMutation__
 *
 * To run a mutation, you first call `useBranchDeactivateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranchDeactivateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branchDeactivateMutation, { data, loading, error }] = useBranchDeactivateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBranchDeactivateMutation(baseOptions?: Apollo.MutationHookOptions<BranchDeactivateMutation, BranchDeactivateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BranchDeactivateMutation, BranchDeactivateMutationVariables>(BranchDeactivateDocument, options);
      }
export type BranchDeactivateMutationHookResult = ReturnType<typeof useBranchDeactivateMutation>;
export type BranchDeactivateMutationResult = Apollo.MutationResult<BranchDeactivateMutation>;
export type BranchDeactivateMutationOptions = Apollo.BaseMutationOptions<BranchDeactivateMutation, BranchDeactivateMutationVariables>;