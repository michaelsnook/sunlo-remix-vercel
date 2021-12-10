# Remix + Supabase starter

From [one-aalam/remix-starter-kit](https://github.com/one-aalam/remix-starter-kit).

_Remix Starter Kit_ is an opinionated boilerplate based off of [Remix](https://remix.run/), with all the bells and whistles you would want ready, up and running when starting a Remix project with Supabase.

Out of the box you get all the `essentials`

- **Typescript** as the language choice
- **Tailwind CSS** for quick styling without getting out of your HTML
- **Daisy UI** for pre-made TailwindCSS component classes
- **Tailwind UI + React Hot Toast** for robust headless logic you can use for components like Dialog/Modal, Dropdown, List, etc.
- **WorkSans** as the App font
- **Icons through React-icons** for on-demand, tree-shakeable icons
- **ESLint** for static code analysis
- **Prettier** for code formatting

with [Supabase](https://supabase.io/) support

- **Authentication System** with Supabase GoTrue
- **User Profiles** available on `/profile` as an example for Supabase PostgREST (CRUD API) (_retreival-only for now_)
- **User Avatar** with Supbase Storage(AWS S3 backed effortless uploads) available on `/images/[bucket-name]/[image-name]` resource routes (_retreival-only for now_)

and a bunch of pre-made, hand-rolled(easily replace-able) components, that you almost always end up installing/using for any non-trivial project

**Note**: Refer the [basic](https://github.com/one-aalam/remix-starter-kit/tree/basic) branch for a bare minimum starter structure with all the `essentials`.

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

Check `package.json` for the full list of commands available at your disposal.

Use this RLS policy

```sql
CREATE POLICY "User data only for this user"
ON public.user_deck
FOR ALL USING (
  auth.uid() = auth_user_id
) WITH CHECK (
  auth.uid() = auth_user_id
);
```

## License

MIT
