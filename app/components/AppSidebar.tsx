import { useState } from 'react'
import { PropsWithChildren, ReactElement } from 'react'
import type { User } from '@supabase/supabase-js'
import type { Deck } from '~/types/deck'
import type { ProfileAttrs } from '~/types/profile'
import { Form, Link, NavLink } from 'remix'

import Button from './Button'

type AppSidebarProps = {
  user?: User
  profile?: ProfileAttrs
  decks?: Deck[]
}

function AppSidebar({
  user,
  profile,
  decks,
}: PropsWithChildren<AppSidebarProps>): ReactElement {
  const [isOpen, setIsOpen] = useState()

  return (
    <nav
      aria-label="Main navigation"
      className="w-80 p-3 bg-blue-10 h-screen shadow-md "
    >
      <ul className="list-none flex flex-col gap-4">
        <li>{profile?.username}</li>
        <li>{user?.email}</li>
        <li>
          <Link to="/" title="Sunlo" className="font-bold">
            Sunlo home
          </Link>
        </li>
        <li>
          <p className="font-bold">Site footer nav</p>
        </li>
        <li>
          <NavLink to="/languages">Languages</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/admin/new">New post</NavLink>
        </li>
        <li>
          <Form method="post" action="/signout">
            <Button type="submit" size="xs" variant="reset">
              Sign Out
            </Button>
          </Form>
        </li>
      </ul>
    </nav>
  )
}

export default AppSidebar
