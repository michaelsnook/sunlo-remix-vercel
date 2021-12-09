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
      <main className="md:min-h-85vh text-white bg-blue-800 md:pb-32 md:pt-0 py-10 grid">
        <div className="container grid md:grid-cols-6 lg:grid-cols-7 grid-cols-3 md:gap-8 lg:gap-20 gap-8 place-self-center">
          <article className="lg:py-10 grid grid-cols-1 gap-6 col-span-3 lg:col-span-4 place-content-center">
            <h1 className="text-4xl">
              Sunlo is a social<br />
              language&nbsp;learning app
            </h1>
            <p className="text-xl">
              Create your own flash cards, pick from a crowd-sourced pool, or
              send your friend some key phrases to help them learn.
            </p>

            <p className="text-xl">
              (If you like React/Remix and want to help with the app,{' '}
              <Link className="underline" to="https://github.com/michaelsnook/sunlo-remix-vercel">come have a look</Link>
              .)
            </p>
          </article>
          <aside className="p-5 col-span-3">
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
                <li><Link className="" to={i.url}>{i.name}</Link></li>
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
                <li><Link className="" to={i.url}>{i.name}</Link></li>
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
