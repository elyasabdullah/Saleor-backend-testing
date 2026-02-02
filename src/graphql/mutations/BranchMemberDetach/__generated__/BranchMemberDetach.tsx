/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BranchMemberDetachMutationVariables = Types.Exact<{
  input: Types.BranchMemberDetachInput;
}>;


export type BranchMemberDetachMutation = { branchMemberDetach?: { success: boolean, userIds?: Array<string> | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const BranchMemberDetachDocument = gql`
    mutation BranchMemberDetach($input: BranchMemberDetachInput!) {
  branchMemberDetach(input: $input) {
    success
    userIds
    errors {
      field
      message
      code
    }
  }
}
    `;
export type BranchMemberDetachMutationFn = Apollo.MutationFunction<BranchMemberDetachMutation, BranchMemberDetachMutationVariables>;

/**
 * __useBranchMemberDetachMutation__
 *
 * To run a mutation, you first call `useBranchMemberDetachMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranchMemberDetachMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branchMemberDetachMutation, { data, loading, error }] = useBranchMemberDetachMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBranchMemberDetachMutation(baseOptions?: Apollo.MutationHookOptions<BranchMemberDetachMutation, BranchMemberDetachMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BranchMemberDetachMutation, BranchMemberDetachMutationVariables>(BranchMemberDetachDocument, options);
      }
export type BranchMemberDetachMutationHookResult = ReturnType<typeof useBranchMemberDetachMutation>;
export type BranchMemberDetachMutationResult = Apollo.MutationResult<BranchMemberDetachMutation>;
export type BranchMemberDetachMutationOptions = Apollo.BaseMutationOptions<BranchMemberDetachMutation, BranchMemberDetachMutationVariables>;