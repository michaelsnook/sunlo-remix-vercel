import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import { getCard } from '~/types/card'

export const loader: LoaderFunction = async ({ params }) => {
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData()
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
