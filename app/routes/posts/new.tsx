import { useActionData, redirect, Form } from 'remix'
import type { ActionFunction } from 'remix'
import { createPost } from '~/types/post'
import AppLayout from '~/components/AppLayout'

type PostError = {
  title?: boolean
  slug?: boolean
  markdown?: boolean
}

export const action: ActionFunction = async ({ request }) => {
  await new Promise(res => setTimeout(res, 1000))

  const formData = await request.formData()
  const title = formData.get('title')
  const slug = formData.get('slug')
  const markdown = formData.get('markdown')

  const errors: PostError = {}
  if (!title) errors.title = true
  if (!slug) errors.slug = true
  if (!markdown) errors.markdown = true

  if (Object.keys(errors).length) {
    return errors
  }

  await createPost({ title, slug, markdown })
  return redirect('/posts')
}

export default function NewPost() {
  const errors = useActionData()

  return (
    <AppLayout>
      <Form method="post" className="flex flex-col gap-4">
        <p className="flex flex-col gap-1">
          <label className="font-bold px-3">
            Post Title: {errors?.title && <em>Title is required</em>}
          </label>
          <input type="text" className="border rounded p-3" name="title" />
        </p>
        <p className="flex flex-col gap-1">
          <label className="font-bold px-3">
            Post Slug: {errors?.slug && <em>Slug is required</em>}
          </label>
          <input type="text" className="border rounded p-3" name="slug" />
        </p>
        <p className="flex flex-col gap-1">
          <label className="font-bold px-3" htmlFor="markdown">
            Markdown:
          </label>{' '}
          {errors?.markdown && <em>Markdown is required</em>}
          <br />
          <textarea
            id="markdown"
            rows={20}
            name="markdown"
            className="p-3 border rounded"
          />
        </p>
        <p>
          <button className="btn btn-primary" type="submit">
            Create Post
          </button>
        </p>
      </Form>
    </AppLayout>
  )
}
