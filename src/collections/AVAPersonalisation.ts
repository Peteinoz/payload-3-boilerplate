import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const AVAPersonalisation: CollectionConfig = {
  slug: 'ava-personalisation',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['user', 'updatedAt'],
    useAsTitle: 'user',
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
      name: 'avaDNA',
      type: 'textarea',
      label: "AVA's DNA — Personality & Tone",
    },
    {
      name: 'myWorld',
      type: 'textarea',
      label: 'My World — Business Info',
    },
    {
      name: 'myRules',
      type: 'textarea',
      label: 'My Rules — Preferences & Boundaries',
    },
    {
      name: 'dailyPulse',
      type: 'textarea',
      label: 'Daily Pulse — Routine & Schedule',
    },
    {
      name: 'brainBank',
      type: 'textarea',
      label: 'Brain Bank — Long Term Memory',
    },
    {
      name: 'myArsenal',
      type: 'textarea',
      label: 'My Arsenal — Tools & Integrations',
    },
  ],
  timestamps: true,
}
