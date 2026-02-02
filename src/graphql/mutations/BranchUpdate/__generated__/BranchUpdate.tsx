/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { BranchFieldsFragmentDoc } from '../../../fragments/BranchFields/__generated__/BranchFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BranchUpdateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  input: Types.BranchInput;
}>;


export type BranchUpdateMutation = { branchUpdate?: { branch?: { id: string, name: string, nameAr?: string | null, description: string, type?: Types.BranchesBranchTypeChoices | null, isActive: boolean, isMarketplaceEnabled: boolean, contactPhoneNumber?: string | null, contactEmail?: string | null, streetAddress1: string, streetAddress2: string, area: string, district: string, region: string, postalCode: string, createdAt: any, updatedAt: any, vendor: { id: string, name: string }, manager?: { id: string, email: string, firstName: string, lastName: string } | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const BranchUpdateDocument = gql`
    mutation BranchUpdate($id: ID!, $input: BranchInput!) {
  branchUpdate(id: $id, input: $input) {
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
export type BranchUpdateMutationFn = Apollo.MutationFunction<BranchUpdateMutation, BranchUpdateMutationVariables>;

/**
 * __useBranchUpdateMutation__
 *
 * To run a mutation, you first call `useBranchUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranchUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branchUpdateMutation, { data, loading, error }] = useBranchUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBranchUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BranchUpdateMutation, BranchUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BranchUpdateMutation, BranchUpdateMutationVariables>(BranchUpdateDocument, options);
      }
export type BranchUpdateMutationHookResult = ReturnType<typeof useBranchUpdateMutation>;
export type BranchUpdateMutationResult = Apollo.MutationResult<BranchUpdateMutation>;
export type BranchUpdateMutationOptions = Apollo.BaseMutationOptions<BranchUpdateMutation, BranchUpdateMutationVariables>;