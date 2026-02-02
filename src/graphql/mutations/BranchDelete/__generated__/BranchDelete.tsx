/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BranchDeleteMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type BranchDeleteMutation = { branchDelete?: { success: boolean, errors: Array<{ field?: string | null, message: string, code: string } | null> } | null };


export const BranchDeleteDocument = gql`
    mutation BranchDelete($id: ID!) {
  branchDelete(id: $id) {
    success
    errors {
      field
      message
      code
    }
  }
}
    `;
export type BranchDeleteMutationFn = Apollo.MutationFunction<BranchDeleteMutation, BranchDeleteMutationVariables>;

/**
 * __useBranchDeleteMutation__
 *
 * To run a mutation, you first call `useBranchDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranchDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branchDeleteMutation, { data, loading, error }] = useBranchDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBranchDeleteMutation(baseOptions?: Apollo.MutationHookOptions<BranchDeleteMutation, BranchDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BranchDeleteMutation, BranchDeleteMutationVariables>(BranchDeleteDocument, options);
      }
export type BranchDeleteMutationHookResult = ReturnType<typeof useBranchDeleteMutation>;
export type BranchDeleteMutationResult = Apollo.MutationResult<BranchDeleteMutation>;
export type BranchDeleteMutationOptions = Apollo.BaseMutationOptions<BranchDeleteMutation, BranchDeleteMutationVariables>;