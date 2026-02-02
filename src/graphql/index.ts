// Generated types and operations
export * from './graphql/types';
export * from './graphql/fragments';
export * from './graphql/queries';
export * from './graphql/mutations';

// Apollo Client re-exports (Transaction from Apollo will be shadowed by GraphQL schema Transaction)
export * from '../apollo-client';
// Re-export Transaction from types to ensure GraphQL Transaction takes precedence
export type { Transaction } from './graphql/types';

// Next.js App Router utilities
// Note: These require Next.js 15+ in the consuming app
export * from '../server-client';
export * from '../server-actions';
