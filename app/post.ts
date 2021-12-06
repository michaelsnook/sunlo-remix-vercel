import { marked } from 'marked'
import supabase from './lib/supabase-client'

export type Post = {
  slug: string;
  title: string;
  markdown: string;
  html: string;
}

export type NewPost = {
  slug: string;
  title: string;
  markdown: string;
}

export async function getPost(slug: string): Promise<Post> {
  const { data, error } = await supabase
    .from('posts')
    .select()
    .eq('slug', slug)
    .single()
  
  if (error) console.log(error)
  else console.log(data)

  return { 
    ...data,
    html: data?.markdown && marked(data.markdown),
  }
}

export async function getPosts(): Promise<Post[]> {
  const { data } = await supabase
    .from('posts')
    .select()    
  return data
}

export async function createPost(post: NewPost): Promise<Post> {
  const { data } = await supabase
    .from('posts')
    .upsert(post)
  console.log('upsert: ', post, data)  
  return { 
    ...data,
    html: data?.markdown && marked(data.markdown),
  } 
}
