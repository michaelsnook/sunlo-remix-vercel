import {
  LoaderFunction,
  redirect,
  useLoaderData,
  Form,
  ActionFunction,
  Link,
} from 'remix'
import { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase.server'
import { isAuthenticated, getUserByRequestToken } from '~/lib/auth'
import AppLayout from '../components/AppLayout'
import type Deck from '~/types/deck'
import type ProfileAttrs from '~/types/profile'

const DevData = ({ data }) => null /* (
  <div className="rounded-md shadow-2xl bg-gray-800 mt-4 text-center">
    {data.map(([i, j]) => (
      <span key={i}>
        <h3 className="px-2 py-1 text-white bg-green-800">{i} from Supabase</h3>
        <small className="text-white px-4 py-2 overflow-scroll inline-block">
          {JSON.stringify(j)}
        </small>
      </span>
    ))}
  </div>
)*/

export let loader: LoaderFunction = async ({ request }) => {
  if (!(await isAuthenticated(request))) return redirect('/auth')
  const { user } = await getUserByRequestToken(request)
  const { data: profile, error } = await supabase
    .from('profile')
    .select(`*`)
    .eq('id', user.id)
    .single()
  const { data: decks, error: decks_error } = await supabase
    .from('user_deck')
    .select('*')
    .eq('profile_id', user.id)

  return { profile, user, decks, error, decks_error }
}

const ProfileCard = ({ profile, user }) => (
  <div className="card shadow-xl p-6 my-4 bordered grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="font-bold px-3">name</label>
      <input
        type="text"
        className="border rounded p-3"
        value={profile.username}
        disabled
      />
    </div>
    <div className="flex flex-col">
      <label className="font-bold px-3">email</label>
      <input
        type="text"
        className="border rounded p-3"
        value={user.email}
        disabled
      />
    </div>
    <div className="flex flex-col">
      <label className="font-bold px-3">languages you speak</label>
      <input
        type="text"
        className="border rounded p-3"
        value={profile.languages_spoken}
        disabled
      />
    </div>
    <div className="flex flex-col">
      <label className="font-bold px-3">your primary language</label>
      <input
        type="text"
        className="border rounded p-3"
        value={profile.language_primary}
        disabled
      />
    </div>
    <div className="flex flex-col">
      <label className="font-bold px-3">reset your password</label>
      <Link className="link-btn" to="/">
        Send password reset email
      </Link>
    </div>
    <div className="flex flex-col">
      <label className="font-bold px-3">your user ID</label>
      <input
        type="text"
        className="border rounded p-3"
        value={user.id}
        disabled
      />
    </div>
  </div>
)

export default function Profile() {
  const { profile, user, decks } =
    useLoaderData<{ profile: ProfileAttrs; user?: User; decks?: Deck[] }>()
  return (
    <AppLayout user={user} profile={profile}>
      <div className="avatar relative">
        <label
          className="mb-8 w-36 h-36 mask mask-hexagon shadow-lg bg-gray-200"
          htmlFor="single"
        >
          <img
            src={`/images/avatars/${profile?.avatar_url}`}
            alt={profile?.username}
          />
        </label>
      </div>
      <div>
        <h2 className="text-4xl mb-1">Hi, {profile?.username} 👋</h2>
        <span className="inline-block px-3 py-2 bg-gray-400 text-white rounded-full">
          You're working on {decks?.length || 'zero'} languages right now.
        </span>
      </div>
      <ProfileCard profile={profile} user={user} />
      <DevData
        data={[
          ['User', user],
          ['Profile', profile],
          ['Decks', decks],
        ]}
      />
    </AppLayout>
  )
}
