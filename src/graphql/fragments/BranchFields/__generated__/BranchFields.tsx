/* eslint-disable */
/* prettier-ignore */
import * as Types from '../../../types';

import { gql } from '@apollo/client';
export type BranchFieldsFragment = { id: string, name: string, nameAr?: string | null, description: string, type?: Types.BranchesBranchTypeChoices | null, isActive: boolean, isMarketplaceEnabled: boolean, contactPhoneNumber?: string | null, contactEmail?: string | null, streetAddress1: string, streetAddress2: string, area: string, district: string, region: string, postalCode: string, createdAt: any, updatedAt: any, vendor: { id: string, name: string }, manager?: { id: string, email: string, firstName: string, lastName: string } | null };

export const BranchFieldsFragmentDoc = gql`
    fragment BranchFields on Branch {
  id
  name
  nameAr
  description
  type
  isActive
  isMarketplaceEnabled
  contactPhoneNumber
  contactEmail
  vendor {
    id
    name
  }
  manager {
    id
    email
    firstName
    lastName
  }
  streetAddress1
  streetAddress2
  area
  district
  region
  postalCode
  createdAt
  updatedAt
}
    `;