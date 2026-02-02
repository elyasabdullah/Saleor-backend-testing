/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import { BranchFieldsFragmentDoc } from '../../../fragments/BranchFields/__generated__/BranchFields';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBranchesQueryVariables = Types.Exact<{
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetBranchesQuery = { branches?: { edges: Array<{ cursor: string, node?: { id: string, name: string, nameAr?: string | null, description: string, type?: Types.BranchesBranchTypeChoices | null, isActive: boolean, isMarketplaceEnabled: boolean, contactPhoneNumber?: string | null, contactEmail?: string | null, streetAddress1: string, streetAddress2: string, area: string, district: string, region: string, postalCode: string, createdAt: any, updatedAt: any, vendor: { id: string, name: string }, manager?: { id: string, email: string, firstName: string, lastName: string } | null } | null } | null>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };


export const GetBranchesDocument = gql`
    query GetBranches($before: String, $after: String, $first: Int, $last: Int) {
  branches(before: $before, after: $after, first: $first, last: $last) {
    edges {
      node {
        ...BranchFields
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    ${BranchFieldsFragmentDoc}`;

/**
 * __useGetBranchesQuery__
 *
 * To run a query within a React component, call `useGetBranchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBranchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBranchesQuery({
 *   variables: {
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useGetBranchesQuery(baseOptions?: Apollo.QueryHookOptions<GetBranchesQuery, GetBranchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBranchesQuery, GetBranchesQueryVariables>(GetBranchesDocument, options);
      }
export function useGetBranchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBranchesQuery, GetBranchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBranchesQuery, GetBranchesQueryVariables>(GetBranchesDocument, options);
        }
// @ts-ignore
export function useGetBranchesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBranchesQuery, GetBranchesQueryVariables>): Apollo.UseSuspenseQueryResult<GetBranchesQuery, GetBranchesQueryVariables>;
export function useGetBranchesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBranchesQuery, GetBranchesQueryVariables>): Apollo.UseSuspenseQueryResult<GetBranchesQuery | undefined, GetBranchesQueryVariables>;
export function useGetBranchesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBranchesQuery, GetBranchesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBranchesQuery, GetBranchesQueryVariables>(GetBranchesDocument, options);
        }
export type GetBranchesQueryHookResult = ReturnType<typeof useGetBranchesQuery>;
export type GetBranchesLazyQueryHookResult = ReturnType<typeof useGetBranchesLazyQuery>;
export type GetBranchesSuspenseQueryHookResult = ReturnType<typeof useGetBranchesSuspenseQuery>;
export type GetBranchesQueryResult = Apollo.QueryResult<GetBranchesQuery, GetBranchesQueryVariables>;