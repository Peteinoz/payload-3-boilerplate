import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Sites: CollectionConfig = {
  slug: 'sites',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['user', 'keyword', 'url', 'createdAt'],
    useAsTitle: 'keyword',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'keyword',
      type: 'text',
      label: 'Target Keyword / Page Title',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      label: 'Full URL (e.g. pete.itsava.ai/plumber-brisbane)',
    },
    {
      name: 'htmlContent',
      type: 'textarea',
      label: 'Generated HTML Content',
    },
    {
      name: 'heroImageUrl',
      type: 'text',
      label: 'Hero Image URL',
    },
    {
      name: 'model',
      type: 'select',
      label: 'AI Model Used',
      options: ['deepseek', 'gemini', 'claude', 'gpt4o'],
      defaultValue: 'deepseek',
    },
    {
      name: 'status',
      type: 'select',
      options: ['live', 'draft', 'expired'],
      defaultValue: 'live',
    },
    {
      name: 'businessInfo',
      type: 'textarea',
      label: 'Business Info Used to Generate',
    },
  ],
  timestamps: true,
}
