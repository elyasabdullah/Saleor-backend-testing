/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BranchMemberAttachMutationVariables = Types.Exact<{
  inputs: Array<Types.BranchMemberAttachInput> | Types.BranchMemberAttachInput;
}>;


export type BranchMemberAttachMutation = { branchMemberAttach?: { success: boolean, branchIds?: Array<string> | null, userIds?: Array<string> | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const BranchMemberAttachDocument = gql`
    mutation BranchMemberAttach($inputs: [BranchMemberAttachInput!]!) {
  branchMemberAttach(inputs: $inputs) {
    success
    branchIds
    userIds
    errors {
      field
      message
      code
    }
  }
}
    `;
export type BranchMemberAttachMutationFn = Apollo.MutationFunction<BranchMemberAttachMutation, BranchMemberAttachMutationVariables>;

/**
 * __useBranchMemberAttachMutation__
 *
 * To run a mutation, you first call `useBranchMemberAttachMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranchMemberAttachMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branchMemberAttachMutation, { data, loading, error }] = useBranchMemberAttachMutation({
 *   variables: {
 *      inputs: // value for 'inputs'
 *   },
 * });
 */
export function useBranchMemberAttachMutation(baseOptions?: Apollo.MutationHookOptions<BranchMemberAttachMutation, BranchMemberAttachMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BranchMemberAttachMutation, BranchMemberAttachMutationVariables>(BranchMemberAttachDocument, options);
      }
export type BranchMemberAttachMutationHookResult = ReturnType<typeof useBranchMemberAttachMutation>;
export type BranchMemberAttachMutationResult = Apollo.MutationResult<BranchMemberAttachMutation>;
export type BranchMemberAttachMutationOptions = Apollo.BaseMutationOptions<BranchMemberAttachMutation, BranchMemberAttachMutationVariables>;