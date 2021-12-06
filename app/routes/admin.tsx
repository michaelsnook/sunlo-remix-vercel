import { Outlet, Link, useLoaderData } from 'remix'
import { getPost, getPosts } from '~/post'
import type { Post } from '~/post'

export const loader = () => {
  return getPosts()
}

export default function Admin() {
  const posts = useLoaderData<Post[]>()
  return (
    <div className="admin">
      <nav>
        admin navbar
      </nav>
      <main><Outlet /></main>
    </div>
  )
}
