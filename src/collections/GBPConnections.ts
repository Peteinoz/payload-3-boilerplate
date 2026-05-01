import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const GBPConnections: CollectionConfig = {
  slug: 'gbp-connections',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['user', 'businessName', 'status', 'createdAt'],
    useAsTitle: 'businessName',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      unique: true,
    },
    {
      name: 'businessName',
      type: 'text',
      label: 'Google Business Name',
    },
    {
      name: 'placeId',
      type: 'text',
      label: 'Google Place ID',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Business Phone',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'category',
      type: 'text',
      label: 'Business Category',
    },
    {
      name: 'averageRating',
      type: 'number',
      label: 'Average Google Rating',
    },
    {
      name: 'totalReviews',
      type: 'number',
    },
    {
      name: 'accessToken',
      type: 'text',
      label: 'Google OAuth Access Token',
      admin: {
        description: 'Encrypted — never display to user',
      },
    },
    {
      name: 'refreshToken',
      type: 'text',
      label: 'Google OAuth Refresh Token',
      admin: {
        description: 'Encrypted — never display to user',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: ['connected', 'disconnected', 'error'],
      defaultValue: 'connected',
    },
    {
      name: 'lastSynced',
      type: 'date',
    },
  ],
  timestamps: true,
}
