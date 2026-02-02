/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetVendorApplicationsQueryVariables = Types.Exact<{
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetVendorApplicationsQuery = { vendorApplications?: { edges: Array<{ cursor: string, node?: { id: string, status: Types.VendorsVendorApplicationStatusChoices, rejectionReason?: string | null, createdAt: any, reviewedAt?: any | null, owner?: { id: string, email: string, firstName: string, lastName: string } | null } | null } | null>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };


export const GetVendorApplicationsDocument = gql`
    query GetVendorApplications($before: String, $after: String, $first: Int, $last: Int) {
  vendorApplications(before: $before, after: $after, first: $first, last: $last) {
    edges {
      node {
        id
        status
        rejectionReason
        createdAt
        reviewedAt
        owner {
          id
          email
          firstName
          lastName
        }
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
    `;

/**
 * __useGetVendorApplicationsQuery__
 *
 * To run a query within a React component, call `useGetVendorApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorApplicationsQuery({
 *   variables: {
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useGetVendorApplicationsQuery(baseOptions?: Apollo.QueryHookOptions<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>(GetVendorApplicationsDocument, options);
      }
export function useGetVendorApplicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>(GetVendorApplicationsDocument, options);
        }
// @ts-ignore
export function useGetVendorApplicationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>;
export function useGetVendorApplicationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>): Apollo.UseSuspenseQueryResult<GetVendorApplicationsQuery | undefined, GetVendorApplicationsQueryVariables>;
export function useGetVendorApplicationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>(GetVendorApplicationsDocument, options);
        }
export type GetVendorApplicationsQueryHookResult = ReturnType<typeof useGetVendorApplicationsQuery>;
export type GetVendorApplicationsLazyQueryHookResult = ReturnType<typeof useGetVendorApplicationsLazyQuery>;
export type GetVendorApplicationsSuspenseQueryHookResult = ReturnType<typeof useGetVendorApplicationsSuspenseQuery>;
export type GetVendorApplicationsQueryResult = Apollo.QueryResult<GetVendorApplicationsQuery, GetVendorApplicationsQueryVariables>;