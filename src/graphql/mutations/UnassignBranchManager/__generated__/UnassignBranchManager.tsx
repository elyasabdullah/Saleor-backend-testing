/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { BranchFieldsFragmentDoc } from '../../../fragments/BranchFields/__generated__/BranchFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UnassignBranchManagerMutationVariables = Types.Exact<{
  input: Types.BranchUnassginManagerInput;
}>;


export type UnassignBranchManagerMutation = { branchUnassginManager?: { branch?: { id: string, name: string, nameAr?: string | null, description: string, type?: Types.BranchesBranchTypeChoices | null, isActive: boolean, isMarketplaceEnabled: boolean, contactPhoneNumber?: string | null, contactEmail?: string | null, streetAddress1: string, streetAddress2: string, area: string, district: string, region: string, postalCode: string, createdAt: any, updatedAt: any, vendor: { id: string, name: string }, manager?: { id: string, email: string, firstName: string, lastName: string } | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const UnassignBranchManagerDocument = gql`
    mutation UnassignBranchManager($input: BranchUnassginManagerInput!) {
  branchUnassginManager(input: $input) {
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
export type UnassignBranchManagerMutationFn = Apollo.MutationFunction<UnassignBranchManagerMutation, UnassignBranchManagerMutationVariables>;

/**
 * __useUnassignBranchManagerMutation__
 *
 * To run a mutation, you first call `useUnassignBranchManagerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnassignBranchManagerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unassignBranchManagerMutation, { data, loading, error }] = useUnassignBranchManagerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUnassignBranchManagerMutation(baseOptions?: Apollo.MutationHookOptions<UnassignBranchManagerMutation, UnassignBranchManagerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnassignBranchManagerMutation, UnassignBranchManagerMutationVariables>(UnassignBranchManagerDocument, options);
      }
export type UnassignBranchManagerMutationHookResult = ReturnType<typeof useUnassignBranchManagerMutation>;
export type UnassignBranchManagerMutationResult = Apollo.MutationResult<UnassignBranchManagerMutation>;
export type UnassignBranchManagerMutationOptions = Apollo.BaseMutationOptions<UnassignBranchManagerMutation, UnassignBranchManagerMutationVariables>;