import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, json, Link } from 'remix'
import LoginSignupForm from '~/components/loginSignupForm'

type IndexData = {
  footer: Array<{ name: string; url: string }>
  applinks: Array<{ name: string; url: string }>
}

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    footer: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'React Router Docs',
        url: 'https://reactrouter.com/docs',
      },
      {
        name: 'Remix Discord',
        url: 'https://discord.gg/VBePs6d',
      },
    ],
    applinks: [
      {
        name: 'Languages',
        url: '/languages',
      },
      {
        name: 'User Profile',
        url: '/profile'
      },
    ],
  }

  // https://remix.run/api/remix#json
  return json(data)
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Sunlo",
    description: "A Social Language Learning App"
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>()

  return (
    <div>
      <main className="md:min-h-85vh text-white bg-blue-800 pt-10 pb-10 md:pb-24 grid">
        <div className="container grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-8 md:gap-12 lg:gap-20 place-self-center">
          <article className="md:pt-4 md:pb-10 grid grid-cols-1 gap-6 col-span-3 lg:col-span-4 place-content-center">
            <h1 className="text-4xl">
              Sunlo is a social<br />
              language&nbsp;learning app
            </h1>
            <p className="text-xl">
              Create your own flash cards, pick from a crowd-sourced pool, or
              send your friend some key phrases to help them learn.
            </p>
          </article>
          <aside className="py-5 px-0 md:px-3 lg:px-5 col-span-3">
            <LoginSignupForm />
          </aside>
        </div>
      </main>

      <footer className="container py-10 flex flex-row gap-16">
        <div>
          <p className="font-bold my-4">Menu</p>
          {data?.footer ? (
            <ul className="flex flex-col gap-2">
              {data.footer.map(i => (
                <li key={i.url}><Link className="" to={i.url}>{i.name}</Link></li>
              ))}
            </ul>
          )
            : null
          }
        </div>
        <div>
          <p className="font-bold my-4">App Links</p>
          {data?.applinks ? (
            <ul className="flex flex-col gap-2">
              {data.applinks.map(i => (
                <li key={i.url}><Link className="" to={i.url}>{i.name}</Link></li>
              ))}
            </ul>
          )
            : null
          }
        </div>
      </footer>
    </div>
  )
}
