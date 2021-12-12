import type { Deck } from './deck'
import type { User } from '@supabase/supabase-js'

export type ProfileAttrs = {
  username: string
  avatar_url?: string
  languages_spoken?: string[]
}

export interface Profile extends ProfileAttrs {
  user_deck?: Deck[]
  user?: User
}
