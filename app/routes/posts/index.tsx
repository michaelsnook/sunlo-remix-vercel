import { Link, useLoaderData } from 'remix'
import type { Post } from '~/types/post'
import { getPosts } from '~/types/post'

export const loader = () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData<Post[]>()
  console.log(posts)
  
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
