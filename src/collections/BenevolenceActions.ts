import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const BenevolenceActions: CollectionConfig = {
  slug: 'benevolence-actions',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['user', 'actionType', 'rating', 'createdAt'],
    useAsTitle: 'actionType',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'actionType',
      type: 'select',
      required: true,
      options: [
        'sms_checkin',
        'video_created',
        'site_built',
        'unlock_badge',
        'unlock_profile',
        'unlock_gbp',
        'unlock_rankreels',
        'birthday_message',
        'anniversary_message',
        'review_highlight',
        'custom',
      ],
    },
    {
      name: 'actionDescription',
      type: 'textarea',
      label: 'What AVA did',
    },
    {
      name: 'rating',
      type: 'number',
      label: 'User Rating (1-5)',
      min: 1,
      max: 5,
    },
    {
      name: 'wasPostedToSocials',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'country',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'industry',
      type: 'text',
    },
    {
      name: 'ageRange',
      type: 'text',
    },
    {
      name: 'gender',
      type: 'text',
    },
    {
      name: 'plan',
      type: 'select',
      options: ['free', 'paid'],
    },
    {
      name: 'notes',
      type: 'textarea',
    },
  ],
  timestamps: true,
}
