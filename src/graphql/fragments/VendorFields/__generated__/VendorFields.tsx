/* eslint-disable */
/* prettier-ignore */

import { gql } from '@apollo/client';
export type VendorFieldsFragment = {
  id: string;
  name: string;
  description?: string | null;
  logo: string;
  isActive: boolean;
  createdAt: any;
  updatedAt: any;
  owner?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  } | null;
};

export const VendorFieldsFragmentDoc = gql`
  fragment VendorFields on Vendor {
    id
    name
    description
    logo
    isActive
    owner {
      id
      email
      firstName
      lastName
    }
    createdAt
    updatedAt
  }
`;
