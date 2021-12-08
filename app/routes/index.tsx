import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

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
      <main style={{background: '#444'}} className="text-white bg-blue-600">
        <article>
          <h1 className="h1">
            Sunlo is a social
            language&nbsp;learning app
          </h1>
          <p>
            Create your own flash cards, or pick from a crowd-sourced pool.
          </p>
          <p>
            The phrase-based approach is meant for people who are immersed
            enough in the new language that you have friends, colleagues,
            and family who can help you learn new words and phrases that are
            useful from day one.
          </p>
          <p>
            (This is not a company, just an app. It's open source and free
            to use. If you like React/Remix and want to help with the app,{' '}
            <Link to="https://github.com/michaelsnook/sunlo-remix-vercel">come have a look</Link>
            .)
          </p>
        </article>
        <aside>
        </aside> 
      </main>
      
      <footer>

      </footer>
    </div>
  );
}
