import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import LoginSignupForm from "~/components/loginSignupForm";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div>
      <main className="min-h-90vh text-white bg-blue-800 lg:pb-32 grid">
        <div className="container grid grid-cols-5 gap-20 place-self-center">
          <article className="grid grid-cols-1 gap-6 col-span-3 place-content-center">
            <h1 className="text-4xl">
              Sunlo is a social
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
          <aside className="p-5 col-span-2">
            <LoginSignupForm />
          </aside>
        </div>
      </main>

      <footer className="container py-6">
        some item
      </footer>
    </div>
  );
}
