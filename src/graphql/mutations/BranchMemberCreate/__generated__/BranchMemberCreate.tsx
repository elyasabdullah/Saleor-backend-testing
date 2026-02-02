/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BranchMemberCreateMutationVariables = Types.Exact<{
  inputs: Array<Types.BranchMemberCreateInput> | Types.BranchMemberCreateInput;
}>;


export type BranchMemberCreateMutation = { branchMemberCreate?: { success: boolean, branchIds?: Array<string> | null, userIds?: Array<string> | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const BranchMemberCreateDocument = gql`
    mutation BranchMemberCreate($inputs: [BranchMemberCreateInput!]!) {
  branchMemberCreate(inputs: $inputs) {
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
export type BranchMemberCreateMutationFn = Apollo.MutationFunction<BranchMemberCreateMutation, BranchMemberCreateMutationVariables>;

/**
 * __useBranchMemberCreateMutation__
 *
 * To run a mutation, you first call `useBranchMemberCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranchMemberCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branchMemberCreateMutation, { data, loading, error }] = useBranchMemberCreateMutation({
 *   variables: {
 *      inputs: // value for 'inputs'
 *   },
 * });
 */
export function useBranchMemberCreateMutation(baseOptions?: Apollo.MutationHookOptions<BranchMemberCreateMutation, BranchMemberCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BranchMemberCreateMutation, BranchMemberCreateMutationVariables>(BranchMemberCreateDocument, options);
      }
export type BranchMemberCreateMutationHookResult = ReturnType<typeof useBranchMemberCreateMutation>;
export type BranchMemberCreateMutationResult = Apollo.MutationResult<BranchMemberCreateMutation>;
export type BranchMemberCreateMutationOptions = Apollo.BaseMutationOptions<BranchMemberCreateMutation, BranchMemberCreateMutationVariables>;