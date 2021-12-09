import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'
import type { Language } from '~/types/language'
import supabase from '~/lib/supabase-client'
import LayoutSidebar from '~/layouts/sidebar'

export const loader: LoaderFunction = () => {
  return supabase.from('language').select()
}

export default function Posts() {
  const { data: posts } = useLoaderData<Language[]>()
  console.log(posts)
  return (
    <LayoutSidebar>
      <h1 className="h1">Languages</h1>
      <ul>
        {posts.map(({ name, code }) => (
          <li key={code}>
            <Link className="hover:underline" to={`/languages/${code}`}>
              {name} ({code})
            </Link>
          </li>
        ))}
      </ul>
    </LayoutSidebar>
  )
}
