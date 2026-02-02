/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BranchMemberMoveMutationVariables = Types.Exact<{
  input: Types.BranchMemberMoveInput;
}>;


export type BranchMemberMoveMutation = { branchMemberMove?: { success: boolean, targetBranchId?: string | null, userIds?: Array<string> | null, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const BranchMemberMoveDocument = gql`
    mutation BranchMemberMove($input: BranchMemberMoveInput!) {
  branchMemberMove(input: $input) {
    success
    targetBranchId
    userIds
    errors {
      field
      message
      code
    }
  }
}
    `;
export type BranchMemberMoveMutationFn = Apollo.MutationFunction<BranchMemberMoveMutation, BranchMemberMoveMutationVariables>;

/**
 * __useBranchMemberMoveMutation__
 *
 * To run a mutation, you first call `useBranchMemberMoveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranchMemberMoveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branchMemberMoveMutation, { data, loading, error }] = useBranchMemberMoveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBranchMemberMoveMutation(baseOptions?: Apollo.MutationHookOptions<BranchMemberMoveMutation, BranchMemberMoveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BranchMemberMoveMutation, BranchMemberMoveMutationVariables>(BranchMemberMoveDocument, options);
      }
export type BranchMemberMoveMutationHookResult = ReturnType<typeof useBranchMemberMoveMutation>;
export type BranchMemberMoveMutationResult = Apollo.MutationResult<BranchMemberMoveMutation>;
export type BranchMemberMoveMutationOptions = Apollo.BaseMutationOptions<BranchMemberMoveMutation, BranchMemberMoveMutationVariables>;