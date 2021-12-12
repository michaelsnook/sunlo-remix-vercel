import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'
import type { Language } from '~/types/language'
import { supabase } from '~/lib/supabase.server'
import AppLayout from '~/components/AppLayout'

export const loader: LoaderFunction = async ({ params }) => {
  const { data: language } = await supabase
    .from('language')
    .select()
    .eq('code', params.code)
  const { data: phrases } = await supabase
    .from('card_phrase')
    .select('*')
    .eq('lang', params.code)
  return { language, phrases }
}

type Translation = {
  text: string
  lang: string
  phrase_id: string
}

type Phrase = {
  id: string
  text: string
  lang: string
  translations?: Translation
  see_also?: Phrase[]
}

type LanguagePageData = {
  language: Language
  phrases: Phrase[]
}

export default function LanguagePage() {
  const { language, phrases } = useLoaderData<LanguagePageData>()
  console.log(language)
  return (
    <AppLayout>
      <h1 className="h1">
        Language {language.name} ({language.code})
      </h1>
      <ul>
        {phrases.map(({ id, text, lang }) => (
          <li key={`phrase-${id}`}>
            <Link className="hover:underline" to={`/phrases/${id}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </AppLayout>
  )
}
