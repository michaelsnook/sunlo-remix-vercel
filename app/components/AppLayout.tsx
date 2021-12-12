import { PropsWithChildren, ReactElement } from 'react'
import type { User } from '@supabase/supabase-js'
import type { ProfileAttrs } from '~/types/profile'
import type { Deck } from '~/types/deck'
import AppSidebar from './AppSidebar'

type AppLayoutProps = {
  user?: User
  profile?: ProfileAttrs
  decks?: Deck[]
}

function AppLayout({
  user,
  profile,
  decks,
  children,
}: PropsWithChildren<AppLayoutProps>): ReactElement {
  return (
    <div className="flex flex-row">
      <AppSidebar user={user} profile={profile} decks={decks} />
      <div style={{ maxWidth: '800px' }} className="ml-80 flex-grow py-6 px-6">
        {children}
      </div>
    </div>
  )
}

export default AppLayout
