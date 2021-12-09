import { marked } from 'marked'
import supabase from '../lib/supabase-client'

export type Post = {
  slug: string
  title: string
  markdown: string
  html: string
}

export type NewPost = {
  slug: string
  title: string
  markdown: string
}

export async function getPost(slug: string): Promise<Post> {
  const { data, error } = await supabase
    .from('posts')
    .select()
    .eq('slug', slug)
    .single()

  if (error) {
    console.log(error)
    throw error
  } else console.log(data)
  return {
    ...data,
    html: data?.markdown && marked(data.markdown),
  }
}

export async function getPosts(): Promise<Post[] | null> {
  const { data, error } = await supabase.from('posts').select()

  if (error) throw error
  return data
}

export async function createPost(post: NewPost): Promise<Boolean> {
  const { data, error } = await supabase.from('posts').upsert(post)

  if (error) {
    console.log('Error creating post: ', error)
    throw error
  } else console.log('Upsert complete', post, data)
  return true
}
