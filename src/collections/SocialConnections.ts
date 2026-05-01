import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const SocialConnections: CollectionConfig = {
  slug: 'social-connections',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['user', 'platform', 'status', 'createdAt'],
    useAsTitle: 'platform',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'platform',
      type: 'select',
      required: true,
      options: [
        'youtube',
        'facebook',
        'instagram',
        'tiktok',
        'linkedin',
        'pinterest',
        'x',
      ],
    },
    {
      name: 'accountName',
      type: 'text',
      label: 'Platform Account Name / Handle',
    },
    {
      name: 'accountId',
      type: 'text',
      label: 'Platform Account ID',
    },
    {
      name: 'accessToken',
      type: 'text',
      label: 'Access Token',
      admin: {
        description: 'Encrypted — never display to user',
      },
    },
    {
      name: 'refreshToken',
      type: 'text',
      label: 'Refresh Token',
      admin: {
        description: 'Encrypted — never display to user',
      },
    },
    {
      name: 'tokenExpiry',
      type: 'date',
      label: 'Token Expiry Date',
    },
    {
      name: 'status',
      type: 'select',
      options: ['connected', 'disconnected', 'expired', 'error'],
      defaultValue: 'connected',
    },
    {
      name: 'lastPosted',
      type: 'date',
    },
  ],
  timestamps: true,
}
