/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { BranchFieldsFragmentDoc } from '../../../fragments/BranchFields/__generated__/BranchFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AssignBranchManagerMutationVariables = Types.Exact<{
  input: Types.BranchAssginManagerInput;
}>;


export type AssignBranchManagerMutation = { branchAssginManager?: { branch?: { id: string, name: string, nameAr?: string | null, description: string, type?: Types.BranchesBranchTypeChoices | null, isActive: boolean, isMarketplaceEnabled: boolean, contactPhoneNumber?: string | null, contactEmail?: string | null, streetAddress1: string, streetAddress2: string, area: string, district: string, region: string, postalCode: string, createdAt: any, updatedAt: any, vendor: { id: string, name: string }, manager?: { id: string, email: string, firstName: string, lastName: string } | null } | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const AssignBranchManagerDocument = gql`
    mutation AssignBranchManager($input: BranchAssginManagerInput!) {
  branchAssginManager(input: $input) {
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
export type AssignBranchManagerMutationFn = Apollo.MutationFunction<AssignBranchManagerMutation, AssignBranchManagerMutationVariables>;

/**
 * __useAssignBranchManagerMutation__
 *
 * To run a mutation, you first call `useAssignBranchManagerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignBranchManagerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignBranchManagerMutation, { data, loading, error }] = useAssignBranchManagerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAssignBranchManagerMutation(baseOptions?: Apollo.MutationHookOptions<AssignBranchManagerMutation, AssignBranchManagerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AssignBranchManagerMutation, AssignBranchManagerMutationVariables>(AssignBranchManagerDocument, options);
      }
export type AssignBranchManagerMutationHookResult = ReturnType<typeof useAssignBranchManagerMutation>;
export type AssignBranchManagerMutationResult = Apollo.MutationResult<AssignBranchManagerMutation>;
export type AssignBranchManagerMutationOptions = Apollo.BaseMutationOptions<AssignBranchManagerMutation, AssignBranchManagerMutationVariables>;