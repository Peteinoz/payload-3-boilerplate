import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email', 'subdomain', 'plan'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Mobile Phone Number',
    },
    {
      name: 'subdomain',
      type: 'text',
      label: 'AVA Subdomain (e.g. pete)',
      unique: true,
    },
    {
      name: 'plan',
      type: 'select',
      options: ['free', 'paid'],
      defaultValue: 'free',
    },
    {
      name: 'trialStartDate',
      type: 'date',
    },
    {
      name: 'trialEndDate',
      type: 'date',
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
      type: 'select',
      options: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    },
    {
      name: 'gender',
      type: 'select',
      options: ['male', 'female', 'other', 'prefer_not_to_say'],
    },
    {
      name: 'googleId',
      type: 'text',
      label: 'Google OAuth ID',
    },
    {
      name: 'avatarUrl',
      type: 'text',
      label: 'Profile Photo URL',
    },
    {
      name: 'telegramChatId',
      type: 'text',
      label: 'Telegram Chat ID',
    },
    {
      name: 'benevolenceScore',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'unlockDay7',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'unlockDay14',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'unlockDay21',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'unlockDay30',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  timestamps: true,
}
